import type { RouteHandler, RouteRequest, RouteResponse } from 'bun-crumb';

import { db, users } from '@/db';

import {
    fetchGoogleOauthTokens,
    handleGoogleUser,
    generateAuthCookies,
} from './auth.service';

import { ApiError } from '@ktube/shared';
import type { ApiResponse } from '@ktube/shared';

import {
    GOOGLE_OAUTH_ENDPOINT,
    GOOGLE_REDIRECT_URI,
    AuthCookies,
    WEBSITE_ORIGIN,
} from '@/constants';

import type { GoogleOauthParam, GoogleOauthFetchBody } from '@/types/oauth';

export const redirectToGoogleOauth: RouteHandler = (_request, response) => {
    const state = crypto.randomUUID();

    const payload: GoogleOauthFetchBody = {
        client_id: process.env.GOOGLE_OAUTH_CLIENT_ID ?? '',
        redirect_uri: GOOGLE_REDIRECT_URI,
        response_type: 'code',
        scope: 'openid email profile',
        state,
    };

    response.setCookie({
        name: AuthCookies.googleOauthState,
        value: state,
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        path: '/',
    });

    return response.redirect(
        GOOGLE_OAUTH_ENDPOINT + '?' + new URLSearchParams(payload),

        302,
    );
};

export const handleGoogleOauthCode: RouteHandler = (
    request: RouteRequest<{ params: GoogleOauthParam }>,

    response: RouteResponse<{ body: ApiResponse }>,
) => {
    const code = request.query.get('code');
    Bun.stdout.write('API_ORIGIN from env:' + process.env.API_ORIGIN + '\n');
    const googleOauthQueryState = request.query.get('state');
    const googleOauthCookieState = request.cookies.get(
        AuthCookies.googleOauthState,
    );

    if (
        !googleOauthQueryState ||
        googleOauthQueryState !== googleOauthCookieState
    ) {
        return response.redirect(WEBSITE_ORIGIN, 302);
    }

    const body: GoogleOauthFetchBody = {
        client_id: process.env.GOOGLE_OAUTH_CLIENT_ID ?? '',

        client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET ?? '',

        redirect_uri: GOOGLE_REDIRECT_URI,

        grant_type: 'authorization_code',
        code: code ?? '',
    };

    return fetchGoogleOauthTokens(body)
        .then((data) => {
            const googleUser = handleGoogleUser(data.id_token);

            return db.query.users
                .findFirst({
                    where: (users, operators) => {
                        return operators.eq(users.sub, googleUser.sub);
                    },
                })

                .then((user) => {
                    if (!user) {
                        db.insert(users).values(googleUser);
                    }

                    const cookies = generateAuthCookies(googleUser.sub);

                    response.setCookie(cookies.accessTokenCookie);

                    response.setCookie(cookies.refreshTokenCookie);

                    return response.redirect(WEBSITE_ORIGIN, 302);
                });
        })
        .catch((error) => {
            if (error instanceof ApiError) {
                return response.send({
                    message: error.message,
                    status: error.status,
                });
            }
        });
};

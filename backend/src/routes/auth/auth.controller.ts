import { redis } from 'bun';
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
    GOOGLE_OAUTH_CLIENT_ID,
    GOOGLE_OAUTH_CLIENT_SECRET,
    AuthCookies,
    WEBSITE_ORIGIN,
} from '@/constants';

import type { GoogleOauthParam, GoogleOauthFetchBody } from '@/types/oauth';

export const redirectToGoogleOauth: RouteHandler = (_request, response) => {
    const state = crypto.randomUUID();

    const payload: GoogleOauthFetchBody = {
        client_id: GOOGLE_OAUTH_CLIENT_ID ?? '',
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

    return fetchGoogleOauthTokens(code ?? '')
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

export const refresh: RouteHandler = (request, response) => {
    const refreshToken = request.cookies.get(AuthCookies.refreshToken);

    if (!refreshToken) {
        return response.send(null, { status: 401 });
    }

    return redis
        .get(refreshToken)
        .then((userSub) => {
            if (!userSub) {
                return response.send(null, { status: 403 });
            }

            const newCookies = generateAuthCookies(userSub);

            response.setCookie(newCookies.accessTokenCookie);
            response.setCookie(newCookies.refreshTokenCookie);

            return response.send();
        })
        .catch(() => {
            return response.send(null, { status: 401 });
        });
};

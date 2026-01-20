import type { CookieInit } from 'bun';
import jwt from 'jsonwebtoken';

import { db } from '@/db';

import { validateDataOrThrow } from '@/utils';

import {
    GOOGLE_OAUTH_CLIENT_ID,
    GOOGLE_OAUTH_CLIENT_SECRET,
    GOOGLE_OAUTH_TOKEN_ENDPOINT,
    GOOGLE_REDIRECT_URI,
} from '@/constants';

import { googleOauthTokenSchema, googleOauthUserSchema } from '@/types/oauth';
import type {
    GoogleOauthFetchBody,
    GoogleOauthToken,
    GoogleOauthUser,
} from '@/types/oauth';

import { ApiError } from '@ktube/shared';
import type { User } from '@ktube/shared';

export const fetchGoogleOauthTokens = (
    code: string,
): Promise<GoogleOauthToken> => {
    const body: GoogleOauthFetchBody = {
        client_id: GOOGLE_OAUTH_CLIENT_ID,
        client_secret: GOOGLE_OAUTH_CLIENT_SECRET,

        redirect_uri: GOOGLE_REDIRECT_URI,

        grant_type: 'authorization_code',

        code,
    };

    return fetch(GOOGLE_OAUTH_TOKEN_ENDPOINT, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: new URLSearchParams(body),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            validateDataOrThrow(
                data,
                googleOauthTokenSchema,
                'Invalid google tokens payload',
                400,
            );

            return data;
        });
};

export const handleGoogleUser = (idToken: string): GoogleOauthUser => {
    const googleUser = jwt.decode(idToken);

    validateDataOrThrow(
        googleUser,
        googleOauthUserSchema,
        'Invalid google user payload',

        400,
    );
    return googleUser;
};

/**
 * Generates cookies for authorization as `Bun.CookieInit`.
 *
 *
 * @param userSub `User.sub` (unique subject identifier) for accessToken.
 */
export const generateAuthCookies = (
    userSub: string,
): {
    accessTokenCookie: CookieInit;
    refreshTokenCookie: CookieInit;
} => {
    const accessToken = jwt.sign(userSub, '', { algorithm: 'RS256' });

    const refreshToken = crypto.randomUUID();

    const accessTokenCookie: CookieInit = {
        name: 'accessToken',
        value: accessToken,

        httpOnly: true,
        secure: true,

        sameSite: 'none',
        path: '/',
    };

    const refreshTokenCookie: CookieInit = {
        name: 'refreshToken',
        value: refreshToken,
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        path: '/',
    };

    return { accessTokenCookie, refreshTokenCookie };
};

export const getUserFromAccessToken = (accessToken: string): Promise<User> => {
    const userSub = jwt.verify(accessToken, '');

    if (!userSub) {
        return Promise.reject(
            new ApiError(
                'Subject identifier from access token is not valid',
                403,
            ),
        );
    }

    return db.query.users
        .findFirst({
            where: (user, operators) => {
                return operators.eq(user.sub, userSub as string);
            },
        })
        .then((user) => {
            if (!user) {
                throw new ApiError('User is not found', 404);
            }

            return user;
        });
};

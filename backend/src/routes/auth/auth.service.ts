import type { CookieInit } from 'bun';
import jwt from 'jsonwebtoken';

import { validateDataOrThrow } from '@/utils';

import { GOOGLE_OAUTH_TOKEN_ENDPOINT } from '@/constants';

import { googleOauthTokenSchema, googleOauthUserSchema } from '@/types/oauth';
import type {
    GoogleOauthFetchBody,
    GoogleOauthToken,
    GoogleOauthUser,
} from '@/types/oauth';

//
export const fetchGoogleOauthTokens = (
    body: GoogleOauthFetchBody,
): Promise<GoogleOauthToken> => {
    return fetch(GOOGLE_OAUTH_TOKEN_ENDPOINT, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(body),
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

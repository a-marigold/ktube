import type { RouteHandler, RouteRequest } from 'bun-crumb';

import {
    GOOGLE_OAUTH_ENDPOINT,
    GOOGLE_OAUTH_TOKEN_ENDPOINT,
    GOOGLE_REDIRECT_URI,
} from '@/constants/oauth';
import type { GoogleOauthParam } from '@/types/oauth';

export const redirectToGoogleOauth: RouteHandler = (_request, response) => {
    return response.redirect(
        GOOGLE_OAUTH_ENDPOINT +
            '?' +
            new URLSearchParams({
                cliend_id: process.env.CLIENT_ID ?? '',
                redirect_uri: GOOGLE_REDIRECT_URI,
                response_type: 'code',

                scope: 'openid email profile',
            }),

        302
    );
};

export const handleGoogleOauthCode: RouteHandler = (
    request: RouteRequest<{ params: GoogleOauthParam }>,
    response
) => {
    const code = request.params.code;

    fetch(GOOGLE_OAUTH_TOKEN_ENDPOINT, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: process.env.CLIENT_ID ?? '',
            redirect_uri: GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code',
            code,
        }),
    }).then(() => {
        response.setCookie({ name: 's' });
    });
};

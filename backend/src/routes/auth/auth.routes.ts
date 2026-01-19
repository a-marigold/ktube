import { createRoute } from 'bun-crumb';

import {
    redirectToGoogleOauth,
    handleGoogleOauthCode,
    refresh,
} from './auth.controller';

export const authRoutes = () => {
    createRoute({
        url: '/auth/google',
        method: 'GET',
        handler: redirectToGoogleOauth,
    });

    createRoute({
        url: '/auth/google/callback',
        method: 'POST',

        handler: handleGoogleOauthCode,
    });

    createRoute({
        url: '/auth/refresh',
        method: 'POST',
        handler: refresh,
    });
};

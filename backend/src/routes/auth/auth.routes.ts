import { createRoute } from 'bun-crumb';

import {
    redirectToGoogleOauth,
    handleGoogleOauthCode,
} from './auth.controller';

export const authRoutes = () => {
    createRoute({
        url: '/auth/google',
        method: 'GET',
        handler: redirectToGoogleOauth,
    });

    createRoute({
        url: '/auth/google/callback',
        method: 'GET',

        handler: handleGoogleOauthCode,
    });
};

import { createRoute } from 'bun-crumb';

import { authorizeWithGoogle } from './auth.controller';

export const authRoutes = () => {
    createRoute({
        url: '/auth/google',
        method: 'GET',
        handler: authorizeWithGoogle,
    });

    createRoute({
        url: '/auth/google/callback',
        method: 'POST',

        handler: () => {},
    });
};

import type { RouteHandler, RouteRequest } from 'bun-crumb';

import { GOOGLE_OAUTH_ENDPOINT } from '../../constants/oauth';

export const authorizeWithGoogle: RouteHandler = (request, response) => {
    return response.redirect('', 302);
};

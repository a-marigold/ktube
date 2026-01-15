import type { RouteHandler, RouteRequest } from 'bun-crumb';

export const authorizeWithGoogle: RouteHandler = (request, response) => {
    return response.redirect('', 302);
};

import type { RouteResponse } from 'bun-crumb';

import { WEBSITE_ORIGIN } from '@/constants';

export const handleCors = (response: RouteResponse) => {
    response.setHeader('Access-Control-Allow-Origin', WEBSITE_ORIGIN);
    response.setHeader(
        'Access-Control-Allow-Methods',
        'GET,POST,PUT,DELETE,OPTIONS',
    );
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
};

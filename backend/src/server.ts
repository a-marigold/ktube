import { listen } from 'bun-crumb';

import { authRoutes } from './routes';

const PORT = process.env.PORT ?? 8080;

authRoutes();

listen({ port: PORT });

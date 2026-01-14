import { listen } from 'bun-crumb';

import { authRoutes } from './routes';

authRoutes();

listen({});

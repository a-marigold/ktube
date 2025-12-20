import { listen } from 'crumb-bun';

import { buildApp } from './app';

const PORT = process.env['PORT'] || '1000';
(() => {
    buildApp();

    listen(PORT);
})();

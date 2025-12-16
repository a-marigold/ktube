import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

import path from 'node:path';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],

    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './') },
            {
                find: '@modals',
                replacement: path.resolve(
                    __dirname,
                    './components/ModalRoot/modals'
                ),
            },
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    test: {
        environment: 'jsdom',
        globals: true,
        include: ['**/*.test.ts', '**/*.test.tsx'],
    },
});

import { describe, it, expect } from 'vitest';

import { ApiError } from '@ktube/shared';
import type { ApiResponse } from '@ktube/shared';

import { handleApiError } from './handleApiError';

describe('handleApiError', () => {
    it('', () => {
        const responseMessage = 'Error';
        const responseStatus = 400;

        const response = new Response(
            JSON.stringify({
                message: responseMessage,
                status: responseStatus,
            } satisfies ApiResponse),
            { status: responseStatus }
        );
        handleApiError(response).catch((error) => {
            expect(error).toBeInstanceOf(ApiError);
            expect(error.message).toBe(responseMessage);
            expect(error.status).toBe(responseStatus);
        });
    });
});

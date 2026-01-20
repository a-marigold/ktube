import { describe, it, expect } from 'vitest';

import { ApiError } from '@ktube/shared';
import type { ApiResponse } from '@ktube/shared';
import { handleApiError } from './handleApiError';

describe('handleApiError', () => {
    it('should throw an ApiError if json is not valid', () => {
        const response = new Response('', { status: 200 });

        handleApiError(response)
            .then((data) => {
                expect(data).toBe(undefined);
            })
            .catch((error) => {
                expect(error).toBeInstanceOf(ApiError);
            });
    });

    it('should throw an ApiError instance even if `response.ok` is true', () => {
        const responseMessage = 'Good';
        const responseStatus = 200;

        const response = new Response(
            JSON.stringify({
                message: responseMessage,
                status: responseStatus,
            } satisfies ApiResponse),
            { status: responseStatus },
        );
        handleApiError(response)
            .then((data) => {
                expect(data).toBe(undefined);
            })
            .catch((error) => {
                expect(error).toBeInstanceOf(ApiError);
                expect(error.message).toBe(responseMessage);
                expect(error.status).toBe(responseStatus);
            });
    });
});

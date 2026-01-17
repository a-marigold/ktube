import { describe, it, expect } from 'bun:test';

import { object, string } from 'zod/v4-mini';

import { ApiError } from '@ktube/shared';

import { validateDataOrThrow } from './validateDataOrThrow';

describe('validateDataOrThrow', () => {
    it('should throw an `ApiError` instance if provided `data` is not valid', () => {
        const schema = object({ key: string() });

        const errorMessage = 'Bad';
        const errorStatus = 400;

        try {
            expect(
                validateDataOrThrow(
                    { key: 16 },
                    schema,
                    errorMessage,
                    errorStatus,
                ),
            );
        } catch (error) {
            expect(error).toBeInstanceOf(ApiError);

            expect((error as ApiError).message).toBe(errorMessage);

            expect((error as ApiError).status).toBe(errorStatus);
        }
    });

    it('should not throw an error if provided `data` is valid', () => {
        const schema = object({ key: string() });

        expect(
            validateDataOrThrow({ key: 'value' }, schema, 'Error', 502),
        ).toBeUndefined();
    });
});

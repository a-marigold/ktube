import type { ZodType } from 'zod';

import type { ZodMiniType } from 'zod/v4-mini';

import { ApiError } from '@ktube/shared';

/**
 * #### Validates data by provided schema and throws an `ApiError` instance if it is not success
 *
 *
 * @param data data to be validated
 * @param schema schema, according to which `data` will be validated
 *
 * @param error error message
 * @param status HTTP status code for this error
 */
export const validateDataOrThrow = <T>(
    data: unknown,
    schema: ZodType<T> | ZodMiniType<T>,

    error: string,

    status: number,
): asserts data is T => {
    if (!schema.safeParse(data).success) {
        throw new ApiError(error, status);
    }
};

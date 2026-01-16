import type { ZodType } from 'zod';
import { ZodMiniType } from 'zod/v4-mini';

/**
 *
 *
 * Validates data by provided schema
 *
 * @param data data to be validated
 * @param schema schema according to which `data` will be validated
 *
 *
 */
export const validateData = <T>(
    data: unknown,
    schema: ZodType<T> | ZodMiniType<T>
): data is T => {
    return schema.safeParse(data).success;
};

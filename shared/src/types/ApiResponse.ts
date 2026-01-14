import { object, string, number } from 'zod';

import type { infer as zInfer } from 'zod';

export const apiResponseSchema = object({
    message: string(),

    status: number(),
});

/**
 *
 *
 *
 *
 * Default API response with status and message
 *
 *
 */
export type ApiResponse = zInfer<typeof apiResponseSchema>;

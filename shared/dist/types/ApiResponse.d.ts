import type { infer as zInfer } from 'zod/v4-mini';
export declare const apiResponseSchema: import("zod/v4-mini").ZodMiniObject<{
    message: import("zod/v4-mini").ZodMiniString<string>;
    status: import("zod/v4-mini").ZodMiniNumber<number>;
}, import("zod/v4/core").$strip>;
/**
 *
 *
 *
 *
 * Default API response with status and message
 *
 *
 *
 */
export type ApiResponse = zInfer<typeof apiResponseSchema>;

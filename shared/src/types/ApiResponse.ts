import { object, string, number } from 'zod';
import type { infer as zInfer } from 'zod';

export const apiResponseSchema = object({
    message: string(),
    status: number(),
});

export type ApiResponse = zInfer<typeof apiResponseSchema>;

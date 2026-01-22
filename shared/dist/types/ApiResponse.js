import { object, string, number } from 'zod/v4-mini';
export const apiResponseSchema = object({
    message: string(),
    status: number(),
});

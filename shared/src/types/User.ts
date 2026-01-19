import { string, object, optional } from 'zod/v4-mini';
import type { infer as zInfer } from 'zod/v4-mini';

export const userSchema = object({
    sub: string(),
    name: string(),
    picture: optional(string()),
    email: string(),
});

export type User = zInfer<typeof userSchema>;

import { string, object } from 'zod/v4-mini';
import type { infer as zInfer } from 'zod/v4-mini';

export const userSchema = object({ name: string() });

export type User = zInfer<typeof userSchema>;

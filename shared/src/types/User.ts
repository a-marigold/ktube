import { string, object } from 'zod';
import type { infer as zInfer } from 'zod';

export const userSchema = object({ name: string() });

export type User = zInfer<typeof userSchema>;

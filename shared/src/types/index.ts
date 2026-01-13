import { object, string } from 'zod';
import type { infer as zInfer } from 'zod';

const userSchema = object({ userName: string().lowercase() });

type User = zInfer<typeof userSchema>;

import type { infer as zInfer } from 'zod/v4-mini';
export declare const userSchema: import("zod/v4-mini").ZodMiniObject<{
    sub: import("zod/v4-mini").ZodMiniString<string>;
    name: import("zod/v4-mini").ZodMiniString<string>;
    picture: import("zod/v4-mini").ZodMiniOptional<import("zod/v4-mini").ZodMiniNullable<import("zod/v4-mini").ZodMiniString<string>>>;
    email: import("zod/v4-mini").ZodMiniString<string>;
}, import("zod/v4/core").$strip>;
export type User = zInfer<typeof userSchema>;

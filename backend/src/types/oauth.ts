import { string, object } from 'zod/v4-mini';
import type { infer as zInfer } from 'zod/v4-mini';

export type GoogleOauthParam = 'code';

export type GoogleOauthFetchBody = {
    client_id?: string;
    client_secret?: string;

    redirect_uri: string;
    response_type?: string;

    grant_type?: 'authorization_code';

    code?: string;
    scope?: string;
    state?: string;
};

export const googleOauthTokenSchema = object({
    access_token: string(),

    id_token: string(),
});
export type GoogleOauthToken = zInfer<typeof googleOauthTokenSchema>;

export const googleOauthUserSchema = object({
    sub: string(),
    name: string(),

    picture: string(),
    email: string(),
});
export type GoogleOauthUser = zInfer<typeof googleOauthUserSchema>;

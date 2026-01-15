export type GoogleOauthParam = 'code';

export type GoogleOauthResponse = {
    access_token: string;
    refresh_token: string;

    id_token: string;
    expires_in: number;
};

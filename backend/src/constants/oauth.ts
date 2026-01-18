import { API_ORIGIN } from './urlOrigins';

/**
 * Google oauth v2 endpoint
 */
export const GOOGLE_OAUTH_ENDPOINT =
    'https://accounts.google.com/o/oauth2/v2/auth';

/**
 * Google oauth v2 token endpoint
 */
export const GOOGLE_OAUTH_TOKEN_ENDPOINT =
    'https://oauth2.googleapis.com/token';

/**
 *
 *
 * Google oauth redirect URL
 */
export const GOOGLE_REDIRECT_URI = API_ORIGIN + '/auth/google/callback';

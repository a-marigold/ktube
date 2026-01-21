/**
 * The URL of frontend
 */
export const WEBSITE_ORIGIN =
    process.env.WEBSITE_ORIGIN ?? 'http://localhost:3000';

/**
 * The URL of server where this code is running
 */
export const API_ORIGIN = process.env.API_ORIGIN ?? 'http://localhost:8080';

/**
 *
 *
 *
 * The URL of frontend `/auth` page
 */

export const WEBSITE_AUTH_URL = WEBSITE_ORIGIN + '/auth';

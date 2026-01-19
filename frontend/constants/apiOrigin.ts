/**
 * The url origin of API.
 *
 *
 *
 * `http://localhost:3000` if `process.env.API_ORIGIN` is not defined.
 */
export const API_ORIGIN =
    process.env.NEXT_PUBLIC_API_ORIGIN ?? 'http://localhost:8080';

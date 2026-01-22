/**
 *
 *
 *
 *
 * Contructor for easy identifying errors from API
 */
export declare class ApiError extends Error {
    status: number;
    constructor(message: string, status: number);
}

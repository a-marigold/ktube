/**
 *
 *
 *
 *
 * Contructor for easy identifying errors from API
 */

export class ApiError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);

        this.message = message;
        this.status = status;

        this.name = 'ApiError';
    }
}

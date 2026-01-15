import { ApiError } from '@ktube/shared';

import type { ApiResponse } from '@ktube/shared';

/**
 * Throws an ApiError even if `response.ok` is true.
 *
 *
 * @param {Response} response an API response.
 *
 *
 * @throws `ApiError`.
 *
 *
 *
 *
 */

export const handleApiError = (response: Response): Promise<never> => {
    return response.json().then((data: ApiResponse) => {
        throw new ApiError(data.message, data.status);
    });
};

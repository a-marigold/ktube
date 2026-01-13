import { ApiError } from '@ktube/shared';

import type { ApiResponse } from '@ktube/shared';

/**
 * Used when `response.ok` is false.
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

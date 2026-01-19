import { ApiError } from '@ktube/shared';

import type { ApiResponse } from '@ktube/shared';

/**
 * #### If the `response.ok` is `false`, throws an ApiError instance
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
    return response.json().then(
        (data: ApiResponse) => {
            throw new ApiError(data.message, data.status);
        },
        () => {
            throw new ApiError('Internal server error', 500);
        },
    );
};

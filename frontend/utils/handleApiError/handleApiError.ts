import { ApiError } from '@ktube/shared';

import type { ApiResponse } from '@ktube/shared';

/**
 * #### Throws an ApiError instance even if the `response.ok` is true.
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

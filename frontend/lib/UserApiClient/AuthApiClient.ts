// TODO: deprecate

import { handleApiError } from '@/utils/handleApiError';

import { API_ORIGIN } from '@/constants/apiOrigin';

export const refreshAccessToken = () => {
    fetch(API_ORIGIN + '/auth/refresh', {
        method: 'POST',
        credentials: 'include',
    }).catch(handleApiError);
};

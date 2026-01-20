// TODO: deprecate

import { handleVoid } from '@/utils/handleVoid';

import { API_ORIGIN } from '@/constants/apiOrigin';

import type { User } from '@ktube/shared';

export const refreshAccessToken = (): void => {
    fetch(API_ORIGIN + '/auth/refresh', {
        method: 'POST',
        credentials: 'include',
    }).catch(handleVoid);
};

export const getUser = (): Promise<User> => {
    return fetch(API_ORIGIN + '/auth/user', {
        method: 'GET',
        credentials: 'include',
    })
        .then((response) => {
            return response.json();
        })
        .catch(handleVoid);
};

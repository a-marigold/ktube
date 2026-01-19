'use client';

import { useUserStore } from '@/store/UserStore';

import { useEffect } from 'react';

import { refreshAccessToken, getUser } from '@/lib/UserApiClient';

import { REFRESH_TOKEN_MAX_AGE_MS } from '@ktube/shared';

export default function AuthRoot() {
    const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
        const refreshInterval = setInterval(() => {
            refreshAccessToken();

            getUser().then(setUser);
        }, REFRESH_TOKEN_MAX_AGE_MS);

        return () => {
            clearInterval(refreshInterval);
        };
    }, []);

    return null;
}

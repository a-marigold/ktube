'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/store/UserStore';

import { refreshAccessToken, getUser } from '@/lib/UserApiClient';
import { REFRESH_TOKEN_MAX_AGE_MS } from '@ktube/shared';

export default function AuthRoot() {
    const setUser = useUserStore((state) => state.setUser);
    // biome-ignore lint: lint/correctness/useExhaustiveDependencies
    useEffect(() => {
        const refreshUser = () => {
            refreshAccessToken();
            getUser().then(setUser);
        };

        const refreshInterval = setInterval(
            refreshUser,
            REFRESH_TOKEN_MAX_AGE_MS,
        );

        refreshUser();

        window.addEventListener('focus', refreshAccessToken);

        return () => {
            clearInterval(refreshInterval);

            window.removeEventListener('focus', refreshAccessToken);
        };
    }, []);

    return null;
}

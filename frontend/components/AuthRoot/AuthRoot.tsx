'use client';

import { useEffect } from 'react';

import { refreshAccessToken } from '@/lib/UserApiClient';

export default function AuthRoot() {
    useEffect(() => {
        const refreshInterval = setInterval(refreshAccessToken, 10_000);

        return () => {
            clearInterval(refreshInterval);
        };
    }, []);

    return null;
}

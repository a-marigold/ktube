'use client';

import { useEffect } from 'react';
import { useHotkeys } from '@/hooks/useHotkeys';
import { useHotkeyConfig } from './useHotkeyConfig';

import { useHotkeyStore } from '@/store/HotkeyStore';

export default function HotkeyRoot() {
    const initializeHotkeys = useHotkeyStore((state) => state.initialize);

    const hotkeyConfig = useHotkeyConfig();

    // biome-ignore lint: lint / correctness / useExhaustiveDependencies;
    useEffect(() => {
        initializeHotkeys(hotkeyConfig);
    }, []);

    useHotkeys();

    return null;
}

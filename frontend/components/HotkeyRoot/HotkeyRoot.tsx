'use client';

import { useEffect } from 'react';
import { useHotkeys } from '@/hooks/useHotkeys';
import { useHotkeyConfig } from './useHotkeyConfig';

import { useHotkeyStore } from '@/store/HotkeyStore';

export default function HotkeyRoot() {
    const __HOTKEYS__ = useHotkeyStore((state) => state.hotkeys);

    const initializeHotkeys = useHotkeyStore((state) => state.initialize);

    const hotkeyConfig = useHotkeyConfig();

    useHotkeys();

    // biome-ignore lint: lint / correctness / useExhaustiveDependencies;
    useEffect(() => {
        initializeHotkeys(hotkeyConfig.config);

        hotkeyConfig.clear();
    }, []);

    return null;
}

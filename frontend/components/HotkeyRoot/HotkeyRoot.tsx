'use client';

import { useEffect } from 'react';
import { useHotkeys } from '@/hooks/useHotkeys';

import { useHotkeyStore } from '@/store/HotkeyStore';

export default function HotkeyRoot() {
    useHotkeys();

    useEffect(() => {}, []);

    return null;
}

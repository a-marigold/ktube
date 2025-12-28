'use client';

import { useEffect, useRef } from 'react';

import { useHotkeyStore } from '@/store/HotkeyStore';

import type { Hotkey } from '@/types/Hotkey';

type SpecialKey = 'ctrl' | 'shift' | 'alt';

/**
 *
 * @param event
 * @param keyString
 *
 * @returns {boolean} value that shows
 */
const hotkeyMatches = (
    event: KeyboardEvent,

    keyString: Hotkey['key']
): boolean => {
    const plainKeys: Lowercase<string>[] = [];

    const specialKeys: Record<SpecialKey, boolean> = {
        ctrl: false,

        shift: false,

        alt: false,
    };

    let lastKey = '';

    for (let pos = 0; pos < keyString.length; pos++) {
        if (keyString[pos] === ' ') continue;

        if (keyString[pos] === '+') {
            lastKey = lastKey.toLowerCase();

            if (
                lastKey === 'ctrl' ||
                lastKey === 'shift' ||
                lastKey === 'alt'
            ) {
                specialKeys[lastKey] = true;
            } else {
                plainKeys.push(lastKey as Lowercase<string>);
            }
        }

        lastKey += keyString[pos];
    }

    const plainMatches = plainKeys.some(
        (key) => key === event.key.toLowerCase()
    );

    const specialMatches =
        (specialKeys.ctrl || event.ctrlKey) &&
        (specialKeys.shift || event.shiftKey) &&
        (specialKeys.alt || event.altKey);

    return plainMatches && specialMatches;
};

/**
 * Activates `hotkeys` listener
 */
export const useHotkeys = () => {
    const hotkeys = useHotkeyStore((state) => state.hotkeys);

    const hotkeysRef = useRef<typeof hotkeys>(hotkeys);

    useEffect(() => {
        hotkeysRef.current = hotkeys;
    }, [hotkeys]);

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            hotkeysRef.current.forEach((hotkey) => {
                console.log(hotkeyMatches(event, hotkey.key));
                if (hotkeyMatches(event, hotkey.key)) {
                    hotkey.callback(event);
                }
            });
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);
};

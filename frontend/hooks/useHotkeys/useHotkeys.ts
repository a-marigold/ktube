'use client';

import { useEffect, useRef } from 'react';

import { useHotkeyStore } from '@/store/HotkeyStore';

import type { Hotkey } from '@/types/Hotkey';

type SpecialKey = 'ctrl' | 'shift' | 'alt';

/**
 *
 *
 *
 *
 * @param event
 *
 * @param keyString string with keys. For example, "Ctrl + K" or "ctrl + shift + k" or "shift+S".
 *
 * @returns {boolean} value that shows does the `keyString` matches pressed keys.
 */
export const matchHotkey = (
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

        lastKey += keyString[pos];

        if (keyString[pos] === '+' || pos === keyString.length - 1) {
            lastKey = lastKey.toLowerCase();

            if (
                lastKey === 'ctrl' ||
                lastKey === 'shift' ||
                lastKey === 'alt'
            ) {
                specialKeys[lastKey] = true;
            } else if (lastKey === 'escape' || lastKey === 'enter') {
                plainKeys.push(lastKey as Lowercase<string>);
            } else {
                plainKeys.push(('key' + lastKey) as Lowercase<string>);
            }
        }
    }

    const plainMatches =
        plainKeys.length === 0 ||
        plainKeys.some((key) => key === event.code.toLowerCase());

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
                if (matchHotkey(event, hotkey.key)) {
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

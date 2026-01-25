import { describe, it, expect } from 'bun:test';

import { matchHotkey } from './useHotkeys';

//
describe('hotkeyMatches', () => {
    it('should match plain keys correctly', () => {
        const keyString = '   J     ';

        const truthyEvent = { code: 'KeyJ' } as KeyboardEvent;

        const truthyMatches = matchHotkey(truthyEvent, keyString);

        expect(truthyMatches).toBe(true);

        const falsyEvent = { code: 'KeyK' } as KeyboardEvent;
        const falsyMatches = matchHotkey(falsyEvent, keyString);
        expect(falsyMatches).toBe(false);
    });

    it('should match special keys correctly', () => {
        const keyString = 'Ctrl   +  ShIft';
        const truthyEvent = {
            code: '',
            shiftKey: true,
            ctrlKey: true,
            altKey: false,
        } as KeyboardEvent;
        const truthyMatches = matchHotkey(truthyEvent, keyString);
        expect(truthyMatches).toBe(true);

        const falsyEvent = {
            code: '',
            shiftKey: true,
            ctrlKey: false,
            altKey: true,
        } as KeyboardEvent;
        const falsyMatches = matchHotkey(falsyEvent, keyString);
        expect(falsyMatches).toBe(false);
    });
});

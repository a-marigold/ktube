import { describe, it, expect, beforeEach } from 'vitest';

import * as scrollLock from './lockBodyScroll';

beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', { value: 1600 });
    Object.defineProperty(document.documentElement, 'clientWidth', {
        value: 1584,
    });
});

describe('lockElementScroll utils', () => {
    it('should add overflow: "hidden" and paddingRight to body when locked', () => {
        scrollLock.lockBodyScroll();

        expect(document.body.style.paddingRight).toBe('16px');

        expect(document.body.style.overflow).toBe('hidden');
    });

    it('should restore the previous css styles when unlockElementScroll is called', () => {
        scrollLock.unlockBodyScroll();

        expect(document.body.style.paddingRight).toBe('');
        expect(document.body.style.overflow).toBe('');
    });

    it('should save the default padding and sum it with scrollbar width', () => {
        Object.defineProperty(window, 'getComputedStyle', {
            value: () => ({ paddingRight: '16px' }),
        });

        scrollLock.lockBodyScroll();

        expect(document.body.style.paddingRight).toBe('32px');
    });
});

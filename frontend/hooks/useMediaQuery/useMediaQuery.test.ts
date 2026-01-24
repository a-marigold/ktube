import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';

import { useMediaQuery } from './useMediaQuery';

describe('useMediaQuery', () => {
    it('should match provided media query correctly', () => {
        window.matchMedia = (() => ({
            addEventListener: () => undefined,
            matches: true,
            removeEventListener: () => undefined,
        })) as unknown as typeof window.matchMedia;

        const mediaQuery = renderHook(() => useMediaQuery('(max-width:600px)'));

        expect(mediaQuery.result.current).toBe(true);
    });
});

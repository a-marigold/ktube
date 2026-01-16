import { describe, it, expect } from 'bun:test';

import { object, string } from 'zod/v4-mini';

import { validateData } from './validateData';

describe('validateData', () => {
    it('should use provided schema correctly', () => {
        const schema = object({ key: string() });

        expect(validateData({ key: 16 }, schema)).toBe(false);
        expect(validateData({ key: 'str' }, schema)).toBe(true);
    });
});

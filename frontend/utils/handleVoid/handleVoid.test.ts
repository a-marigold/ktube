import { describe, it, expect } from 'vitest';

import { handleVoid } from './handleVoid';

describe('handleVoid', () => {
    it('should always return undefined', () => {
        expect(handleVoid()).toBe(undefined);
    });
});

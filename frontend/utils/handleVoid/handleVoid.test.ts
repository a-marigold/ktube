import { describe, it, expect } from 'bun:test';

import { handleVoid } from './handleVoid';

describe('handleVoid', () => {
    it('should always return undefined', () => {
        expect(handleVoid()).toBe(undefined);
    });
});

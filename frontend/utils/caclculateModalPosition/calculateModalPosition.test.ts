import { describe, expect, it } from 'vitest';

import { calculateModalPosition } from './calculateModalPosition';

describe('calculateModalPosition', () => {
    it('should position `modalElement` relative to `relativeElement` accuretly', () => {
        const testRelativeElement = {
            getBoundingClientRect: () => ({
                width: 64,
                height: 64,
                top: 200,
                left: 16,
                right: 80,
            }),
        } as HTMLElement;
        const testModalElement = {
            getBoundingClientRect: () => ({ width: 256, height: 82 }),
            style: {
                transform: '',
            },
        } as HTMLElement;

        const testGap = 10;

        calculateModalPosition(testModalElement, testRelativeElement, 'right');

        const testRelativeRect = testRelativeElement.getBoundingClientRect();
        const testModalRect = testModalElement.getBoundingClientRect();

        expect(testModalElement.style.transform).toBe(
            `translate(${testRelativeRect.right + testGap}px, ${
                testRelativeRect.top +
                testRelativeRect.height / 2 -
                testModalRect.height / 2
            }px)`
        );
    });
});

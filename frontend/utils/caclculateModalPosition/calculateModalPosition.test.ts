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

        calculateModalPosition(
            testModalElement,
            testRelativeElement,
            'right',
            testGap
        );

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

    it('should fix `modalLeft` when it is more than viewport width', () => {
        const modalElement = {
            getBoundingClientRect: () => ({ width: 100, height: 160 }),
            style: {
                transform: '',
            },
        } as HTMLElement;

        const relativeElement = {
            getBoundingClientRect: () => ({
                width: 60,

                height: 60,

                top: 20,
                right: 960,
                left: 900,
            }),
        } as HTMLElement;

        Object.defineProperties(window, {
            visualViewport: { value: { width: 1020 } },

            innerWidth: { value: 1020 },
        });

        const gap = 0;

        const modalRect = modalElement.getBoundingClientRect();

        const relativeRect = relativeElement.getBoundingClientRect();

        calculateModalPosition(modalElement, relativeElement, 'right', gap);

        expect(modalElement.style.transform).toBe(
            `translate(${
                (window.visualViewport?.width ?? window.innerWidth) -
                modalRect.width -
                gap
            }px, ${
                relativeRect.top +
                relativeRect.height / 2 -
                modalRect.height / 2
            }px)`
        );
    });
});

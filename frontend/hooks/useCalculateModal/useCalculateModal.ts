'use client';

import { useEffect } from 'react';

import type { Position } from '@/utils/caclculateModalPosition';

import { calculateModalPosition } from '@/utils/caclculateModalPosition';

/**
 * Calculates `modalElement` position relative to `relativeElement`.
 *
 * Changes `modalElement` width on `relativeElement` width.
 *
 * @param {HTMLElement} modalElement
 * @param {HTMLElement} relativeElement
 * @param {Position} position `top`, `right`, `bottom` or `left` modal position relative to `relativeElement`
 *
 *
 * @param {number} gap  distance between modal and relative elements.
 *
 *
 *
 * @example
 * ```tsx
 * const modalRef = useRef<HTMLDivElement>(null)
 * const containerRef = useRef<HTMLDivElement>(null)
 *
 * useCalculateModal(modalRef.current, buttonRef.current!, 'bottom', 16);
 *
 * return (
 *     <div ref={modalRef}> Modal </div>
 *     <div ref={containerRef}>
 *         <button ref={buttonRef}> Open modal </button>
 *     </div>
 * )
 * ```
 */
export const useCalculateModal = (
    modalElement: HTMLElement | null,

    relativeElement: HTMLElement,

    position: Position,

    gap?: number
) => {
    useEffect(() => {
        const calculateModalWidth = () => {
            if (modalElement) {
                const relativeOffsetWidth = relativeElement.offsetWidth;

                modalElement.style.width = `${relativeOffsetWidth}px`;
            }
        };

        const handleCalculateModalPosition = () => {
            if (modalElement) {
                calculateModalPosition(
                    modalElement,
                    relativeElement,
                    position,
                    gap
                );
            }
        };

        calculateModalWidth();
        handleCalculateModalPosition();

        const resizeObserver = new ResizeObserver(() => {
            calculateModalWidth();
            handleCalculateModalPosition();

            console.log(relativeElement, modalElement);
        });

        resizeObserver.observe(relativeElement);
    }, [modalElement, relativeElement, position, gap]);
};

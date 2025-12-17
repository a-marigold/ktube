'use client';

import { useEffect } from 'react';
import type { RefObject } from 'react';

import type { Position } from '@/utils/caclculateModalPosition';

import { calculateModalPosition } from '@/utils/caclculateModalPosition';

/**
 * Calculates `modalRef` position relative to `relativeElement`.
 *
 * Changes `modalRef` width on `relativeElement` width.
 *
 *
 * @param {RefObject<HTMLElement | null>} modalRef react ref object with modal element
 * @param {HTMLElement} relativeElement
 * @param {Position} position `top`, `right`, `bottom` or `left` modal position relative to `relativeElement`
 * @param {number} gap  distance between modal and relative elements.
 *
 *
 *
 * @example
 * ```tsx
 * const modalRef = useRef<HTMLDivElement>(null)
 * const containerRef = useRef<HTMLDivElement>(null)
 *
 * useCalculateModal(modalRef.current, containerRef.current!, 'bottom', 16);
 *
 * return (
 *     <div ref={modalRef}> Modal </div>
 *     <div ref={containerRef}>
 *         <button> Open modal </button>
 *     </div>
 * )
 * ```
 */
export const useCalculateModal = (
    modalRef: RefObject<HTMLElement | null>,

    relativeElement: HTMLElement,

    position: Position,

    gap?: number
) => {
    useEffect(() => {
        const handleCalculateModal = () => {
            if (modalRef.current) {
                // Change width
                const relativeOffsetWidth = relativeElement.offsetWidth;
                modalRef.current.style.width = `${relativeOffsetWidth}px`;

                // Position
                calculateModalPosition(
                    modalRef.current,
                    relativeElement,
                    position,
                    gap
                );
            }
        };

        handleCalculateModal();

        window.addEventListener('resize', handleCalculateModal);

        return () => {
            window.removeEventListener('resize', handleCalculateModal);
        };
    }, [modalRef, relativeElement, position, gap]);
};

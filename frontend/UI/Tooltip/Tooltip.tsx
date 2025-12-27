'use client';

import { useEffect, useRef } from 'react';

import { calculateModalPosition } from '@/utils/caclculateModalPosition';
import type { Position } from '@/utils/caclculateModalPosition';

import tooltipStyles from './Tooltip.module.scss';

interface TooltipProps {
    id: string;
    title: string;

    relativeElement: HTMLElement;
    position: Position;
    gap?: number;
}
export default function Tooltip({
    id,
    title,
    relativeElement,
    position,
    gap,
}: TooltipProps) {
    const tooltipRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (tooltipRef.current) {
    //         calculateModalPosition(
    //             tooltipRef.current,
    //             relativeElement,
    //             position,

    //             gap
    //         );
    //     }
    // });
    return (
        <div
            ref={tooltipRef}
            id={id}
            role='tooltip'
            className={tooltipStyles['tooltip']}
        >
            {title}
        </div>
    );
}

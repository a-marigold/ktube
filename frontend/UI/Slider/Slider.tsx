'use client';

import { useEffect, useRef } from 'react';
import type { Dispatch } from 'react';

import sliderStyles from './Slider.module.scss';

interface SliderProps {
    value: number;
    minValue: number;
    maxValue: number;

    setValue: Dispatch<number>;

    ariaLabel: string;

    className?: string;
}
export default function Slider({
    value,
    minValue,
    maxValue,

    setValue,

    ariaLabel,
    className,
}: SliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const thumbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const thumb = thumbRef.current;

        if (!thumb || !sliderRef.current) return;

        const sliderWidth = sliderRef.current.offsetWidth;

        let startLeft = value;
        let lastLeft = 0;

        let startClientX = 0;

        const handlePointerMove = (event: MouseEvent) => {
            requestAnimationFrame(() => {
                const clientX = event.clientX;

                const deltaClientX = clientX - startClientX;

                lastLeft = startLeft + deltaClientX;

                if (lastLeft < 0) {
                    lastLeft = 0;
                } else if (lastLeft > sliderWidth) {
                    lastLeft = sliderWidth;
                }

                setValue(Math.floor((lastLeft / sliderWidth) * 100));
                thumb.style.left = lastLeft + 'px';
            });
        };

        const handlePointerUp = () => {
            window.removeEventListener('pointermove', handlePointerMove);

            window.removeEventListener('pointerup', handlePointerUp);
        };

        const handlePointerDown = (event: MouseEvent) => {
            startClientX = event.clientX;
            startLeft = lastLeft;

            window.addEventListener('pointermove', handlePointerMove);

            window.addEventListener('pointerup', handlePointerUp);
        };

        thumb.addEventListener('pointerdown', handlePointerDown);

        return () => {
            thumb.removeEventListener('pointerdown', handlePointerDown);
        };
    }, []);

    return (
        <div
            ref={sliderRef}
            role='slider'
            aria-label={ariaLabel}
            aria-valuenow={value}
            aria-valuemin={minValue}
            aria-valuemax={maxValue}
            className={`${sliderStyles['slider']} ${className ?? ''}`}
        >
            <div ref={thumbRef} className={sliderStyles['thumb']}>
                <span className={sliderStyles['value']}> {value} </span>
            </div>
        </div>
    );
}

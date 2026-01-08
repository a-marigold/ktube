'use client';

import { useEffect, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import sliderStyles from './Slider.module.scss';

/**
 * Fixed width of thumb
 */
const THUMB_WIDTH = 9;

interface SliderProps {
    value: number;
    minValue: number;
    maxValue: number;

    step?: number;

    setValue: Dispatch<SetStateAction<number>>;

    ariaLabel: string;

    className?: string;
}
export default function Slider({
    value,
    minValue,
    maxValue,

    step = 1,

    setValue,

    ariaLabel,
    className,
}: SliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const thumbRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const thumb = thumbRef.current;
        const progress = progressRef.current;
        const slider = sliderRef.current;

        if (!thumb || !slider || !progress) return;

        const sliderWidth = slider.offsetWidth;

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

                    setValue(minValue);
                } else if (lastLeft > sliderWidth - THUMB_WIDTH) {
                    lastLeft = sliderWidth - THUMB_WIDTH;

                    setValue(
                        Math.floor((lastLeft + THUMB_WIDTH) / sliderWidth) * 100
                    );
                } else {
                    setValue(Math.floor((lastLeft / sliderWidth) * 100));
                }

                progress.style.width = lastLeft + 'px';
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

        const handleKeyDown = (event: KeyboardEvent) => {
            const stepDistance = (step * sliderWidth) / 100;

            if (event.key === 'ArrowLeft') {
                event.preventDefault();

                lastLeft -= stepDistance;
                setValue((prev) => Math.max(minValue, prev - step));
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();

                lastLeft += stepDistance;

                setValue((prev) => Math.min(maxValue, prev + step));
            }

            if (lastLeft < 0) {
                lastLeft = 0;
            } else if (lastLeft > sliderWidth - THUMB_WIDTH) {
                lastLeft = sliderWidth - THUMB_WIDTH;
            }

            progress.style.width = lastLeft + 'px';

            thumb.style.left = lastLeft + 'px';
        };

        thumb.addEventListener('pointerdown', handlePointerDown);
        slider.addEventListener('keydown', handleKeyDown);

        return () => {
            thumb.removeEventListener('pointerdown', handlePointerDown);

            slider.removeEventListener('keydown', handleKeyDown);
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
            tabIndex={0}
        >
            <div ref={progressRef} className={sliderStyles['progress']} />

            <div ref={thumbRef} className={sliderStyles['thumb']}>
                <span className={sliderStyles['value']}> {value} </span>
            </div>
        </div>
    );
}

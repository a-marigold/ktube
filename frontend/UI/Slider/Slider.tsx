'use client';

// TODO: handler and effect order

import { useEffect, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import sliderStyles from './Slider.module.scss';

/**
 * Fixed width of thumb from CSS
 */
const THUMB_WIDTH = 9;

interface SliderProps {
    value: number;
    minValue: number;
    maxValue: number;

    step: number;
    onChange: (value: number) => void;

    ariaLabel: string;
    className?: string;
}
export default function Slider({
    value,
    minValue,
    maxValue,

    step,

    onChange,

    ariaLabel,
    className,
}: SliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const thumbRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    const pointerIdRef = useRef<number | null>(null);
    const startLeftRef = useRef<number>(0);
    const isDraggingRef = useRef<boolean>(false);

    useEffect(() => {
        if (
            !thumbRef.current ||
            !sliderRef.current ||
            !progressRef.current ||
            isDraggingRef.current
        )
            return;

        const sliderWidth = sliderRef.current.offsetWidth;

        const usableWidth = sliderWidth - THUMB_WIDTH;

        let newLeft =
            ((value - minValue) / (maxValue - minValue)) * usableWidth;

        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft > sliderWidth - THUMB_WIDTH) {
            newLeft = sliderWidth - THUMB_WIDTH;
        }

        thumbRef.current.style.left = newLeft + 'px';
        progressRef.current.style.width = newLeft + 'px';

        startLeftRef.current = newLeft;
    }, [value, minValue, maxValue]);

    useEffect(() => {
        const thumb = thumbRef.current;

        const progress = progressRef.current;
        const slider = sliderRef.current;

        if (!thumb || !slider || !progress) return;

        const sliderWidth = slider.offsetWidth;
        const usableWidth = sliderWidth - THUMB_WIDTH;

        let lastLeft = startLeftRef.current;

        let startClientX = 0;

        const handlePointerMove = (event: PointerEvent) => {
            const clientX = event.clientX;

            const deltaClientX = clientX - startClientX;

            lastLeft = startLeftRef.current + deltaClientX;

            if (lastLeft < 0) {
                lastLeft = 0;

                onChange(minValue);
            } else if (lastLeft > usableWidth) {
                lastLeft = usableWidth;

                onChange(maxValue);
            } else {
                onChange(
                    minValue + (lastLeft / usableWidth) * (maxValue - minValue)
                );
            }

            progress.style.width = lastLeft + 'px';

            thumb.style.left = lastLeft + 'px';
        };

        const handlePointerUp = (event: PointerEvent) => {
            isDraggingRef.current = false;

            thumb.releasePointerCapture(event.pointerId);

            thumb.removeEventListener('pointermove', handlePointerMove);

            thumb.removeEventListener('pointerup', handlePointerUp);
        };

        const handlePointerDown = (event: PointerEvent) => {
            isDraggingRef.current = true;
            pointerIdRef.current = event.pointerId;

            thumb.setPointerCapture(pointerIdRef.current);

            startClientX = event.clientX;
            startLeftRef.current = lastLeft;

            thumb.addEventListener('pointermove', handlePointerMove);

            thumb.addEventListener('pointerup', handlePointerUp);
            thumb.addEventListener('pointercancel', handlePointerUp);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            const stepDistance =
                minValue + (step * usableWidth) / (maxValue - minValue);

            if (event.key === 'ArrowLeft') {
                event.preventDefault();

                lastLeft -= stepDistance;

                onChange(Math.max(minValue, value - step));
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();

                lastLeft += stepDistance;

                onChange(Math.min(maxValue, value + step));
            }

            if (lastLeft < 0) {
                lastLeft = 0;
            } else if (lastLeft > usableWidth) {
                lastLeft = usableWidth;
            }
            progress.style.width = lastLeft + 'px';

            thumb.style.left = lastLeft + 'px';
        };

        thumb.addEventListener('pointerdown', handlePointerDown);
        thumb.addEventListener('keydown', handleKeyDown);

        return () => {
            thumb.removeEventListener('pointerdown', handlePointerDown);
            thumb.removeEventListener('pointermove', handlePointerMove);

            thumb.removeEventListener('pointerup', handlePointerUp);
            thumb.removeEventListener('pointercancel', handlePointerUp);

            thumb.removeEventListener('keydown', handleKeyDown);

            if (pointerIdRef.current) {
                thumb.releasePointerCapture(pointerIdRef.current);
            }
        };
    }, [minValue, maxValue, step, onChange]);

    return (
        <div
            ref={sliderRef}
            className={`${sliderStyles['slider']} ${className ?? ''}`}
        >
            <div ref={progressRef} className={sliderStyles['progress']} />

            <div
                ref={thumbRef}
                role='slider'
                aria-label={ariaLabel}
                aria-valuenow={value}
                aria-valuemin={minValue}
                aria-valuemax={maxValue}
                tabIndex={0}
                className={sliderStyles['thumb']}
            >
                <span className={sliderStyles['value']}>{value}</span>
            </div>
        </div>
    );
}

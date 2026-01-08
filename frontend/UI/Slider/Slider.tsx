'use client';
// TODO: handler and effect order
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

    step: number;

    setValue: Dispatch<SetStateAction<number>>;

    ariaLabel: string;
    className?: string;
}
export default function Slider({
    value,
    minValue,
    maxValue,

    step,

    setValue,

    ariaLabel,
    className,
}: SliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const thumbRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    const startLeftRef = useRef<number>(value);
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
            requestAnimationFrame(() => {
                const clientX = event.clientX;
                const deltaClientX = clientX - startClientX;

                lastLeft = startLeftRef.current + deltaClientX;

                if (lastLeft < 0) {
                    lastLeft = 0;

                    setValue(minValue);
                } else if (lastLeft > usableWidth) {
                    lastLeft = usableWidth;

                    setValue(maxValue);
                } else {
                    setValue(
                        minValue +
                            (lastLeft / usableWidth) * (maxValue - minValue)
                    );
                }
                progress.style.width = lastLeft + 'px';
                thumb.style.left = lastLeft + 'px';
            });
        };

        const handlePointerUp = (event: PointerEvent) => {
            isDraggingRef.current = false;

            thumb.releasePointerCapture(event.pointerId);

            thumb.removeEventListener('pointermove', handlePointerMove);

            thumb.removeEventListener('pointerup', handlePointerUp);
        };

        const handlePointerDown = (event: PointerEvent) => {
            isDraggingRef.current = true;

            thumb.setPointerCapture(event.pointerId);

            startClientX = event.clientX;
            startLeftRef.current = lastLeft;

            thumb.addEventListener('pointermove', handlePointerMove);

            thumb.addEventListener('pointerup', handlePointerUp);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            const stepDistance = (step * usableWidth) / 100;

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

            thumb.removeEventListener('keydown', handleKeyDown);
        };
    }, [minValue, maxValue, step, setValue]);

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
                <span className={sliderStyles['value']}> {value} </span>
            </div>
        </div>
    );
}

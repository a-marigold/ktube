import type { ButtonHTMLAttributes } from 'react';

import type { IconProps } from '@/types/IconProps';

import buttonStyles from './OverlayButton.module.scss';

interface OverlayButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        IconProps {
    shape: 'circle' | 'ellipse';
    'aria-label': string;
}
export default function OverlayButton({
    iconHref,

    iconWidth,
    iconHeight,
    iconColor,

    shape,

    className,

    ...attributes
}: OverlayButtonProps) {
    return (
        <button
            {...attributes}
            className={`${buttonStyles['overlay-button']} ${
                buttonStyles[shape]
            } ${className ?? ''}`}
        >
            <svg
                width={iconWidth}
                height={iconHeight}
                color={iconColor}
                aria-hidden='true'
            >
                <use href={iconHref} />
            </svg>
        </button>
    );
}

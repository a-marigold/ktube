import type { ButtonHTMLAttributes } from 'react';

import type { IconProps } from '@/types/IconProps';

import buttonStyles from './IconButton.module.scss';

interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        IconProps {
    variant?: 'filled' | 'empty';

    'aria-label': string;

    hintTitle?: string;
}
export default function IconButton({
    variant = 'empty',

    iconHref,

    iconWidth,
    iconHeight,
    iconColor = 'var(--font-color)',

    hintTitle,

    className,

    ...attributes
}: IconButtonProps) {
    return (
        <button
            {...attributes}
            className={`${buttonStyles['icon-button']} ${buttonStyles[variant]}`}
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

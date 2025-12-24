import type { ButtonHTMLAttributes } from 'react';

import buttonStyles from './IconButton.module.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'filled' | 'empty';

    iconHref: `#${string}`;
    iconWidth: number;

    iconHeight: number;
    color?: string;

    'aria-label': string;

    hintTitle?: string;
}
export default function IconButton({
    variant = 'empty',

    iconHref,

    iconWidth,
    iconHeight,
    color = 'var(--font-color)',

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
                color={color}
                aria-hidden='true'
            >
                <use href={iconHref} />
            </svg>
        </button>
    );
}

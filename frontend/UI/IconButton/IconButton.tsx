import type { ButtonHTMLAttributes } from 'react';

import buttonStyles from './IconButton.module.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'filled' | 'empty';

    href: `#${string}`;
    width: number;

    height: number;
    color?: string;

    'aria-label': string;

    hintTitle?: string;
}
export default function IconButton({
    variant = 'empty',

    href,
    width,
    height,
    color = 'var(--font-color)',

    hintTitle,

    className,

    ...attributes
}: IconButtonProps) {
    return (
        <button
            {...attributes}
            className={`${buttonStyles['icon-button']} ${buttonStyles[variant]}`}
            aria-hidden='true'
        >
            <svg width={width} height={height} color={color}>
                <use href={href} />
            </svg>
        </button>
    );
}

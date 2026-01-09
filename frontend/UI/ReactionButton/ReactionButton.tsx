import type { ButtonHTMLAttributes } from 'react';

import type { IconProps } from '@/types/IconProps';

import buttonStyles from './ReactionButton.module.scss';

interface ReactionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'accent' | 'secondary';

    title?: string;
    icon?: IconProps;

    'aria-label': string;
}

export default function ReactionButton({
    variant,
    title,
    icon,
    className,
    ...attributes
}: ReactionButtonProps) {
    return (
        <button
            {...attributes}
            className={`${buttonStyles['reaction-button']} ${
                buttonStyles[variant]
            } ${icon && buttonStyles['with-icon']}`}
        >
            {icon && (
                <svg
                    width={icon.iconWidth}
                    height={icon.iconHeight}
                    color={icon.iconColor}
                >
                    <use href={icon.iconHref} />
                </svg>
            )}

            {title}
        </button>
    );
}

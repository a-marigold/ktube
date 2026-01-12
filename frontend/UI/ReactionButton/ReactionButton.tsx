import type { ButtonHTMLAttributes } from 'react';

import type { IconProps } from '@/types/IconProps';

import buttonStyles from './ReactionButton.module.scss';

interface ReactionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'accent' | 'secondary';

    title?: string;

    icon?: IconProps & { activeIconHref?: IconProps['iconHref'] };

    'aria-label': string;

    isActive?: boolean;
}

export default function ReactionButton({
    variant,

    title,
    icon,
    className,

    isActive = false,

    ...attributes
}: ReactionButtonProps) {
    return (
        <button
            {...attributes}
            className={`${buttonStyles['reaction-button']} ${
                buttonStyles[variant]
            } ${icon && buttonStyles['with-icon']} ${className ?? ''}`}
        >
            {icon && (
                <svg
                    width={icon.iconWidth}
                    height={icon.iconHeight}
                    color={icon.iconColor}
                    aria-hidden='true'
                >
                    <use
                        href={
                            isActive && icon.activeIconHref
                                ? icon.activeIconHref
                                : icon.iconHref
                        }
                    />
                </svg>
            )}

            {title}
        </button>
    );
}

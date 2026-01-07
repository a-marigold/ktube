import type { ButtonHTMLAttributes } from 'react';
import Link, { type LinkProps } from 'next/link';

import type { IconProps } from '@/types/IconProps';

import linkStyles from './MiniNavLink.module.scss';

export interface MiniNavLinkProps extends LinkProps {
    href: string;

    'aria-label': string;

    isActive: boolean;

    className?: string;
    icon: IconProps & { activeHref?: `#${string}` };

    onMouseLeave?: ButtonHTMLAttributes<HTMLAnchorElement>['onMouseLeave'];
}
export default function MiniNavLink({
    isActive,
    className,
    icon,

    ...attributes
}: MiniNavLinkProps) {
    return (
        <Link
            {...attributes}
            className={`${linkStyles['mini-nav-link']} ${className ?? ''}`}
        >
            <svg
                width={icon.iconWidth}
                height={icon.iconHeight}
                color={icon.iconColor || 'var(--font-color)'}
                aria-hidden='true'
            >
                <use
                    href={
                        isActive && icon.activeHref
                            ? icon.activeHref
                            : icon.iconHref
                    }
                />
            </svg>
        </Link>
    );
}

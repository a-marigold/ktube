import Link, { type LinkProps } from 'next/link';

import type { IconProps } from '@/types/IconProps';

import linkStyles from './NavLink.module.scss';

export interface NavLinkProps extends LinkProps {
    title: string;

    isActive: boolean;

    className?: string;

    'aria-label': string;

    icon: IconProps & { activeHref?: `#${string}` };
}
export default function NavLink({
    title,

    isActive,

    className,

    icon,

    ...attributes
}: NavLinkProps) {
    return (
        <Link
            {...attributes}
            className={`${linkStyles['nav-link']} ${
                isActive ? linkStyles['active'] : ''
            } ${className ?? ''}`}
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

            <span className={linkStyles['title']}> {title} </span>
        </Link>
    );
}

import Link, { type LinkProps } from 'next/link';

import type { IconProps } from '@/types/IconProps';

import linkStyles from './MenuLink.module.scss';

export interface MenuLinkProps extends LinkProps {
    title: string;

    icon: IconProps;

    className?: string;
}
export default function MenuLink({
    title,
    icon,

    className,

    ...attributes
}: MenuLinkProps) {
    return (
        <Link
            {...attributes}
            className={`${linkStyles['menu-link']} ${className ?? ''}`}
        >
            <svg
                width={icon.iconWidth}
                height={icon.iconHeight}
                color={icon.iconColor || 'var(--font-color)'}
                aria-hidden='true'
            >
                <use href={icon.iconHref} />
            </svg>

            <span className={linkStyles['title']}>{title}</span>
        </Link>
    );
}

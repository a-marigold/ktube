import Link, { type LinkProps } from 'next/link';

import type { SvgIconProps } from '@/types/SvgIconProps';

import linkStyles from './MenuLink.module.scss';

export interface MenuLinkProps extends LinkProps {
    title: string;

    icon: SvgIconProps;

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
                width={icon.width}
                height={icon.height}
                color={icon.color || 'var(--font-color)'}
            >
                <use href={icon.href} />
            </svg>

            <span className={linkStyles['title']}>{title}</span>
        </Link>
    );
}

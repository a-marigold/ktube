import Link, { type LinkProps } from 'next/link';

import { SvgIconProps } from '@/types/SvgIconProps';

import linkStyles from './NavLink.module.scss';

export interface NavLinkProps extends LinkProps {
    title: string;

    isActive: boolean;

    className?: string;

    'aria-label': string;

    icon: SvgIconProps & { activeHref?: `#${string}` };
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
                width={icon.width}
                height={icon.height}
                color={icon.color || 'var(--font-color)'}
                aria-hidden='true'
            >
                <use
                    href={
                        isActive && icon.activeHref
                            ? icon.activeHref
                            : icon.href
                    }
                />
            </svg>

            <span className={linkStyles['title']}> {title} </span>
        </Link>
    );
}

import Link, { type LinkProps } from 'next/link';

import type { SvgIconProps } from '@/types/SvgIconProps';

import linkStyles from './MiniNavLink.module.scss';

export interface MiniNavLinkProps extends LinkProps {
    'aria-label': string;

    isActive: boolean;

    className?: string;

    icon: SvgIconProps & { activeHref?: `#${string}` };
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
        </Link>
    );
}

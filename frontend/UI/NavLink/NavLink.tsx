import Link, { type LinkProps } from 'next/link';

import linkStyles from './NavLink.module.scss';

interface NavLinkProps extends LinkProps {
    title: string;

    className: string;

    icon: {
        href: `#${string}`;
        width: number;
        height: number;
        color?: string;
        fill?: string;
    };
}
export default function NavLink({
    title,
    className,
    icon,
    ...attributes
}: NavLinkProps) {
    return (
        <Link
            {...attributes}
            className={`${linkStyles['nav-link']} ${className ?? ''}`}
        >
            <svg
                width={icon.width}
                height={icon.height}
                color={icon.color || 'var(--icon-color)'}
                fill={icon.fill}
            >
                <use href={icon.href} />
            </svg>

            <span className={linkStyles['title']}> {title} </span>
        </Link>
    );
}

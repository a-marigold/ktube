import NextLink from 'next/link';

import type { AnchorHTMLAttributes } from 'react';

import type { IconProps } from '@/types/IconProps';

import linkStyles from './PrimaryLink.module.scss';

interface PrimaryLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;

    href: string;
    'aria-label': string;

    title: string;
    icon?: IconProps;
}
export default function PrimaryLink({
    external = false,

    title,
    icon,

    className,

    ...attributes
}: PrimaryLinkProps) {
    const Link = external ? 'a' : NextLink;

    return (
        <Link
            rel='noopener noreferrer'
            {...attributes}
            className={`${linkStyles['primary-link']} ${
                icon && linkStyles['with-icon']
            } ${className ?? ''}`}
        >
            {icon && (
                <svg
                    width={icon.iconWidth}
                    height={icon.iconHeight}
                    color={icon.iconColor}
                    aria-hidden='true'
                >
                    <use href={icon.iconHref} />
                </svg>
            )}

            {title}
        </Link>
    );
}

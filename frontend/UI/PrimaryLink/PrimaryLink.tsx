import type { AnchorHTMLAttributes } from 'react';

import type { IconProps } from '@/types/IconProps';

import linkStyles from './PrimaryLink.module.scss';

interface PrimaryLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    'aria-label': string;

    title: string;
    icon?: IconProps;
}
export default function PrimaryLink({
    title,
    icon,

    className,
    ...attributes
}: PrimaryLinkProps) {
    return (
        <a
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
                >
                    <use href={icon.iconHref} />
                </svg>
            )}

            {title}
        </a>
    );
}

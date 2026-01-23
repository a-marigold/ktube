import Link, { type LinkProps } from 'next/link';

import linkStyles from './SettingLink.module.scss';

interface SettingLinkProps extends LinkProps {
    title: string;

    'aria-label': string;

    className?: string;

    isActive: boolean;
}

export default function SettingLink({
    title,
    isActive,
    className,
    ...attributes
}: SettingLinkProps) {
    return (
        <Link
            {...attributes}
            className={`${linkStyles['setting-link']} ${isActive && linkStyles['active']} ${className ?? ''}`}
        >
            {title}
        </Link>
    );
}

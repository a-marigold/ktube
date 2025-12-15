'use client';

import { usePathname } from 'next/navigation';

import NavLink from '@/UI/NavLink';

import type { NavListLink } from '../../navLists';

import listStyles from './NavList.module.scss';

interface NavListProps {
    linkList: NavListLink[];
}

export default function NavList({ linkList }: NavListProps) {
    const pathname = usePathname();

    return (
        <ul className={listStyles['nav-list']}>
            {linkList.map((link) => (
                <li key={link.title}>
                    <NavLink
                        {...link}
                        icon={{
                            ...link.icon,
                            href:
                                link.href === pathname
                                    ? link.activeIconHref
                                    : link.icon.href,
                        }}
                        isActive={link.href === pathname}
                    />
                </li>
            ))}
        </ul>
    );
}

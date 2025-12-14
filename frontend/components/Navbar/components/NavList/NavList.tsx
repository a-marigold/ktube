'use client';

import { usePathname } from 'next/navigation';

import NavLink, { type NavLinkProps } from '@/UI/NavLink';

import listStyles from './NavList.module.scss';

interface NavListProps {
    linkList: Omit<NavLinkProps, 'isActive'>[];
}
export default function NavList({ linkList }: NavListProps) {
    const pathname = usePathname();

    return (
        <ul className={listStyles['nav-list']}>
            {linkList.map((link) => (
                <li key={link.title}>
                    <NavLink {...link} isActive={link.href === pathname} />
                </li>
            ))}
        </ul>
    );
}

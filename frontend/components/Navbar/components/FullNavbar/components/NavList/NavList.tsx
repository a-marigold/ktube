'use client';

import { usePathname } from 'next/navigation';

import { useNavbarStore } from '@/store/NavbarStore';

import NavLink, { type NavLinkProps } from '@/UI/NavLink';

import listStyles from './NavList.module.scss';

interface NavListProps {
    linkList: NavLinkProps[];
}

export default function NavList({ linkList }: NavListProps) {
    const pathname = usePathname();

    const toggleNavbar = useNavbarStore((state) => state.toggleNavbar);

    return (
        <ul className={listStyles['nav-list']}>
            {linkList.map((link) => (
                <li key={link.title}>
                    <NavLink
                        {...link}
                        isActive={link.href === pathname}
                        onClick={toggleNavbar}
                    />
                </li>
            ))}
        </ul>
    );
}

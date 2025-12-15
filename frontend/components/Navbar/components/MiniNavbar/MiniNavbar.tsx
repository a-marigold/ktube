'use client';

import { usePathname } from 'next/navigation';

import MiniNavLink, { type MiniNavLinkProps } from '@/UI/MiniNavLink';

import navStyles from './MiniNavbar.module.scss';

const linkList: MiniNavLinkProps[] = [
    {
        href: '/',
        isActive: false,

        'aria-label': 'Go to the home page',
        icon: {
            href: '#home-icon',
            activeHref: '#fill-home-icon',

            width: 24,
            height: 24,
        },
    },
];

export default function MiniNavbar() {
    const pathname = usePathname();

    return (
        <nav className={navStyles['mini-navbar']}>
            {linkList.map((link) => (
                <MiniNavLink
                    key={link.href}
                    {...link}
                    isActive={link.href === pathname}
                />
            ))}
        </nav>
    );
}

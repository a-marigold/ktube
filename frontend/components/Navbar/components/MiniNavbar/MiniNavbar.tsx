'use client';

import { usePathname } from 'next/navigation';

import { useModalStore } from '@/store/ModalStore';

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

    const openModal = useModalStore((state) => state.openModal);

    return (
        <nav className={navStyles['mini-navbar']} data-testid='mini-navbar'>
            {linkList.map((link) => (
                <MiniNavLink
                    key={link.href}
                    {...link}
                    isActive={link.href === pathname}
                    onMouseEnter={() => {
                        openModal(
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(255,0,0,0.2)',
                                    position: 'fixed',
                                }}
                                onClick={() => {
                                    openModal(null);
                                }}
                            ></div>
                        );
                    }}
                />
            ))}
        </nav>
    );
}

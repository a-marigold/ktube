'use client';

import { useEffect, useRef } from 'react';

import { useNavbarStore } from '@/store/NavbarStore';

import NavList from './components/NavList/NavList';

import { pageLinkList, settingsLinkList } from './navLists';

import IconButton from '@/UI/IconButton';
import navStyles from './FullNavbar.module.scss';

interface FullNavbarProps {
    /**
     * Max width flag to activate `position: fixed` and animations on Navbar
     */
    maxWidthMatches: boolean;
}
export default function FullNavbar({ maxWidthMatches }: FullNavbarProps) {
    const showNavbar = useNavbarStore((state) => state.showNavbar);

    const toggleNavbar = useNavbarStore((state) => state.toggleNavbar);

    const navbarRef = useRef<HTMLElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!navbarRef.current || !backdropRef.current) return;

        if (!maxWidthMatches) {
            backdropRef.current.style.display = '';

            return;
        }

        if (showNavbar) {
            navbarRef.current.style.transform = `translateX(0)`;
            backdropRef.current.style.display = 'block';
        } else {
            navbarRef.current.style.transform = `translateX(-100%)`;
            backdropRef.current.style.display = 'none';
        }
    }, [showNavbar, maxWidthMatches]);
    return (
        <>
            <nav
                ref={navbarRef}
                className={navStyles['full-navbar']}
                data-testid='full-navbar'
            >
                {maxWidthMatches && (
                    <div className={navStyles['head']}>
                        <IconButton
                            variant='empty'
                            iconHref='#nav-toggle-icon'
                            iconWidth={24}
                            iconHeight={24}
                            aria-label='Close navigation panel'
                            onClick={toggleNavbar}
                        />
                    </div>
                )}

                <NavList linkList={pageLinkList} />
                <NavList linkList={settingsLinkList} />
            </nav>

            <div
                ref={backdropRef}
                className={navStyles['backdrop']}
                onClick={toggleNavbar}
            />
        </>
    );
}

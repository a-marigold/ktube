'use client';

import { useEffect } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { mediaBreakpoints } from '@/constants/mediaBreakpoints';

import { useNavbarStore } from '@/store/NavbarStore';

import MiniNavbar from './components/MiniNavbar';
import FullNavbar from './components/FullNavbar';

export default function Navbar() {
    const showNavbar = useNavbarStore((state) => state.showNavbar);
    const maxWidthMatches = useMediaQuery(
        `(max-width: ${mediaBreakpoints.extraLarge}px)`
    );

    useEffect(() => {
        document.documentElement.classList.toggle('navbar-shown', showNavbar);
    }, [showNavbar]);

    return maxWidthMatches ? (
        <>
            <FullNavbar maxWidthMatches={maxWidthMatches} />

            <MiniNavbar />
        </>
    ) : showNavbar ? (
        <FullNavbar maxWidthMatches={maxWidthMatches} />
    ) : (
        <MiniNavbar />
    );
}

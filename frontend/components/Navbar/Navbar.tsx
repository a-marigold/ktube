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
        const miniNavbarWidth = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--mini-navbar-width');
        const fullNavbarWidth = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--full-navbar-width');

        document.documentElement.style.setProperty(
            '--navbar-width',
            showNavbar ? fullNavbarWidth : miniNavbarWidth
        );
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

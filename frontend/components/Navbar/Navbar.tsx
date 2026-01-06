'use client';

import { useEffect } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import {
    mediaBreakpoints,
    miniNavbarWidth,
    fullNavbarWidth,
} from '@/constants/styles';

import { useNavbarStore } from '@/store/NavbarStore';

import MiniNavbar from './components/MiniNavbar';
import FullNavbar from './components/FullNavbar';

export default function Navbar() {
    const showNavbar = useNavbarStore((state) => state.showNavbar);

    const maxWidthMatches = useMediaQuery(
        `(max-width: ${mediaBreakpoints.extraLarge}px)`
    );

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--navbar-width',
            maxWidthMatches
                ? miniNavbarWidth + 'px'
                : showNavbar
                ? fullNavbarWidth + 'px'
                : miniNavbarWidth + 'px'
        );
    }, [showNavbar, maxWidthMatches]);

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

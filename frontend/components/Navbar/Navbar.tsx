'use client';

import { useEffect } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import {
    mediaBreakpoints,
    miniNavbarWidth,
    fullNavbarWidth,
} from '@/constants';

import { useNavbarStore } from '@/store/NavbarStore';

import MiniNavbar from './components/MiniNavbar';
import FullNavbar from './components/FullNavbar';

export default function Navbar() {
    const showNavbar = useNavbarStore((state) => state.showNavbar);

    const mediumMatches = useMediaQuery(
        `(max-width: ${mediaBreakpoints.medium}px`,
    );
    const extraLargeMatches = useMediaQuery(
        `(max-width: ${mediaBreakpoints.extraLarge}px)`,
    );

    useEffect(() => {
        let calcedNavbarWidth: number = 0;

        if (mediumMatches) {
            calcedNavbarWidth = 0;
        } else if (extraLargeMatches) {
            calcedNavbarWidth = miniNavbarWidth;
        } else if (showNavbar) {
            calcedNavbarWidth = fullNavbarWidth;
        } else {
            calcedNavbarWidth = miniNavbarWidth;
        }

        document.documentElement.style.setProperty(
            '--navbar-width',

            calcedNavbarWidth + 'px',
        );
    }, [showNavbar, extraLargeMatches, mediumMatches]);

    return extraLargeMatches ? (
        <>
            <FullNavbar maxWidthMatches={extraLargeMatches} />

            <MiniNavbar />
        </>
    ) : showNavbar ? (
        <FullNavbar maxWidthMatches={extraLargeMatches} />
    ) : (
        <MiniNavbar />
    );
}

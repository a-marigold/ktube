'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { mediaBreakpoints } from '@/constants/mediaBreakpoints';

import { useNavbarStore } from '@/store/NavbarStore';

import MiniNavbar from './components/MiniNavbar';
import FullNavbar from './components/FullNavbar';

export default function Navbar() {
    const showNavbar = useNavbarStore((state) => state.showNavbar);

    const maxWidthMatches = useMediaQuery(
        `(max-width: ${mediaBreakpoints.extraLarge})`
    );

    return maxWidthMatches ? (
        <>
            {showNavbar && <FullNavbar />}

            <MiniNavbar />
        </>
    ) : (
        <>{showNavbar ? <FullNavbar /> : <MiniNavbar />}</>
    );
}

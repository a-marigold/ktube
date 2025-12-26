'use client';

import { useEffect } from 'react';

import { useNavbarStore } from '@/store/NavbarStore';

export default function NavbarRoot() {
    const showNavbar = useNavbarStore((state) => state.showNavbar);

    useEffect(() => {
        document.documentElement.classList.toggle('navbar-shown', showNavbar);
    }, [showNavbar]);

    return null;
}

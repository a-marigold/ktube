import { describe, it, expect, beforeEach } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';

import { useNavbarStore } from '@/store/NavbarStore';

import Header from './Header';

import Navbar from '../Navbar';

Object.defineProperty(window, 'matchMedia', {
    value: () => {
        return {
            matches: false,
            addEventListener: () => {},
            removeEventListener: () => {},
        };
    },
});

beforeEach(() => {
    render(
        <>
            <Header />

            <Navbar />
        </>
    );
});

describe('Toggle Navbar logic in Header', () => {
    it('should toggle the Navbar and Navbar should be FullNavbar on page load', () => {
        useNavbarStore.setState({ showNavbar: false });

        const toggleButton = screen.getByTestId('navbar-toggle-button');
        expect(screen.queryByTestId('mini-navbar')).toBeDefined();

        fireEvent.click(toggleButton);

        expect(screen.queryByTestId('full-navbar')).toBeDefined();

        expect(screen.queryByTestId('mini-navbar')).toBeNull();

        fireEvent.click(toggleButton);

        expect(screen.queryByTestId('mini-navbar')).toBeDefined();
        expect(screen.queryByTestId('full-navbar')).toBeNull();
    });

    it('should not hide MiniNavbar when the window has low width', () => {});
});

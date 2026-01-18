import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';

import { useUserStore } from '@/store/UserStore';

import { useNavbarStore } from '@/store/NavbarStore';

import Header from './Header';

import Navbar from '../Navbar';

const mockMatchMedia = (matches: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
        value: () => ({
            matches,
            addEventListener: () => {},
            removeEventListener: () => {},
        }),
    });
};

describe('Toggle Navbar logic in Header', () => {
    it('should toggle the Navbar and Navbar should be FullNavbar on page load', () => {
        useNavbarStore.setState({ showNavbar: false });

        mockMatchMedia(false);

        render(
            <>
                <Header />

                <Navbar />
            </>,
        );

        const toggleButton = screen.getByTestId('navbar-toggle-button');

        expect(screen.queryByTestId('mini-navbar')).toBeDefined();

        fireEvent.click(toggleButton);

        expect(screen.queryByTestId('mini-navbar')).toBeNull();

        expect(screen.queryByTestId('full-navbar')).toBeDefined();

        fireEvent.click(toggleButton);

        expect(screen.getByTestId('mini-navbar')).toBeDefined();

        expect(screen.queryByTestId('full-navbar')).toBeNull();
    });

    it('should not hide MiniNavbar when the window has low width', () => {
        useNavbarStore.setState({ showNavbar: false });

        mockMatchMedia(true);

        render(
            <>
                <Header />

                <Navbar />
            </>,
        );

        const toggleButton = screen.getByTestId('navbar-toggle-button');

        expect(screen.getByTestId('mini-navbar')).toBeDefined();

        expect(screen.queryByTestId('full-navbar')).toBeDefined();

        fireEvent.click(toggleButton);

        expect(screen.getByTestId('mini-navbar')).toBeDefined();

        expect(screen.getByTestId('full-navbar')).toBeDefined();
    });

    it('should contain `sign-in-button` if the useUserStore.getState().user is null and should not contain this button in the user in not null', () => {
        useUserStore.setState({ user: null });

        render(<Header />);

        expect(screen.queryByTestId('sign-in-link')).toBeDefined();

        act(() => {
            useUserStore.setState({ user: {} });
        });

        render(<Header />);

        expect(screen.queryByTestId('sign-in-link')).toBeNull();
    });
});

import { describe, it, expect, beforeEach } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';

import Header from './Header';
import Navbar from '../Navbar';

beforeEach(() => {
    render(
        <>
            <Header />

            <Navbar />
        </>
    );
});

describe('Toggle Navbar logic in Header', async () => {
    it('should close toggle the Navbar and Navbar should be FullNavbar on page load', () => {
        const toggleButton = screen.getByTestId('navbar-toggle-button');
        expect(screen.queryByTestId('mini-navbar')).toBeNull();

        fireEvent.click(toggleButton);

        expect(screen.queryByTestId('full-navbar')).toBeNull();

        expect(screen.getByTestId('mini-navbar')).toBeDefined();

        fireEvent.click(toggleButton);

        expect(screen.queryByTestId('mini-navbar')).toBeNull();
        expect(screen.getByTestId('full-navbar')).toBeDefined();
    });
});

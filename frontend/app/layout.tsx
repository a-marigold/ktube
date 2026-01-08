import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import HotkeyRoot from '@/components/HotkeyRoot/HotkeyRoot';
import ModalRoot from '@/components/ModalRoot';
import TooltipRoot from '@/components/TooltipRoot';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

import SvgSprites from '@/UI/SvgSprites';

import './globals.scss';

const roboto = Roboto({ variable: '--roboto-font', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'KTube',
    description: 'Watch and share videos',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={roboto.className}>
                <HotkeyRoot />
                <ModalRoot />
                <TooltipRoot />
                <SvgSprites />

                <Header />

                <div className='main-group'>
                    <Navbar />

                    {children}
                </div>
            </body>
        </html>
    );
}

'use client';

import { usePathname } from 'next/navigation';

import { useModalStore } from '@/store/ModalStore';
import { useTooltipStore } from '@/store/TooltipStore';

import SubscriptionsModal from '@modals/SubscriptionsModal';

import MiniNavLink, { type MiniNavLinkProps } from '@/UI/MiniNavLink';

import navStyles from './MiniNavbar.module.scss';

const linkList: (MiniNavLinkProps & { tooltipTitle?: string })[] = [
    {
        href: '/',
        isActive: false,
        'aria-label': 'Go to the home page',
        icon: {
            href: '#home-icon',
            activeHref: '#fill-home-icon',

            width: 24,
            height: 24,
        },

        tooltipTitle: 'Home',
    },
    {
        href: '/subscriptions',
        isActive: false,

        'aria-label': 'Go to the home page',
        icon: {
            href: '#subscriptions-icon',
            activeHref: '#fill-subscriptions-icon',

            width: 24,
            height: 24,
        },
    },
];

export default function MiniNavbar() {
    const showTooltip = useTooltipStore((state) => state.show);

    const hideTooltip = useTooltipStore((state) => state.hide);

    const pathname = usePathname();

    const openModal = useModalStore((state) => state.openModal);

    return (
        <nav className={navStyles['mini-navbar']} data-testid='mini-navbar'>
            {linkList.map((link) => (
                <MiniNavLink
                    key={link.href}
                    {...link}
                    isActive={link.href === pathname}
                    onMouseEnter={(event) => {
                        openModal(
                            <SubscriptionsModal
                                relativeElement={event.currentTarget}
                                position='right'
                            />,
                            false
                        );
                        if (link.tooltipTitle) {
                            showTooltip({
                                title: link.tooltipTitle,
                                relativeElement: event.currentTarget,
                                position: 'right',
                                gap: 10,
                            });
                        }
                    }}
                    onMouseLeave={hideTooltip}
                />
            ))}
        </nav>
    );
}

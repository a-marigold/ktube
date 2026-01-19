'use client';

import { useRef } from 'react';

import { usePathname } from 'next/navigation';

import { useModalStore } from '@/store/ModalStore';
import { useTooltipStore } from '@/store/TooltipStore';

import { MODAL_GAP } from '@/constants';

import SubscriptionsModal from '@modals/SubscriptionsModal';

import MiniNavLink, { type MiniNavLinkProps } from '@/UI/MiniNavLink';

import navStyles from './MiniNavbar.module.scss';

const linkList: (MiniNavLinkProps & { tooltipTitle?: string })[] = [
    {
        href: '/',
        isActive: false,
        'aria-label': 'Go to the home page',
        icon: {
            iconHref: '#home-icon',
            activeHref: '#fill-home-icon',

            iconWidth: 24,
            iconHeight: 24,
        },

        tooltipTitle: 'Home',
    },

    {
        href: '/subscriptions',
        isActive: false,

        'aria-label': 'Go to the home page',
        icon: {
            iconHref: '#subscriptions-icon',
            activeHref: '#fill-subscriptions-icon',

            iconWidth: 24,
            iconHeight: 24,
        },
    },
];

export default function MiniNavbar() {
    const showTooltip = useTooltipStore((state) => state.show);

    const hideTooltip = useTooltipStore((state) => state.hide);

    const pathname = usePathname();

    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    const modalRef = useRef<HTMLElement>(null);

    return (
        <nav className={navStyles['mini-navbar']} data-testid='mini-navbar'>
            {linkList.map((link) => (
                <MiniNavLink
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    aria-label={link['aria-label']}
                    isActive={link.href === pathname}
                    onMouseEnter={(event) => {
                        openModal(
                            <SubscriptionsModal
                                ref={modalRef}
                                relativeElement={event.currentTarget}
                                position='right'
                                gap={MODAL_GAP}
                            />,
                            false,
                        );
                        if (link.tooltipTitle) {
                            showTooltip({
                                relativeElement: event.currentTarget,
                                title: link.tooltipTitle,
                                position: 'right',
                                gap: MODAL_GAP,
                            });
                        }
                    }}
                    onMouseLeave={(event) => {
                        hideTooltip();

                        if (event.relatedTarget === modalRef.current) return;
                        closeModal();
                    }}
                />
            ))}
        </nav>
    );
}

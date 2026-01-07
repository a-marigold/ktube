import type { NavLinkProps } from '@/UI/NavLink';

export const pageLinkList: NavLinkProps[] = [
    {
        href: '/',
        isActive: false,

        title: 'Home',

        'aria-label': 'Go to the homepage',

        icon: {
            iconHref: '#home-icon',

            activeHref: '#fill-home-icon',

            iconWidth: 24,
            iconHeight: 24,
            iconColor: 'var(--font-color)',
        },
    },

    {
        href: '/subscriptions',
        isActive: false,

        title: 'Subscriptions',

        'aria-label': 'Go to the subscriptions page',

        icon: {
            iconHref: '#subscriptions-icon',
            activeHref: '#fill-subscriptions-icon',

            iconWidth: 24,
            iconHeight: 24,
            iconColor: 'var(--font-color)',
        },
    },
];

export const settingsLinkList: NavLinkProps[] = [
    {
        href: '/settings',
        isActive: false,

        title: 'Settings',

        'aria-label': 'Go to the settings page',

        icon: {
            iconHref: '#gear-icon',

            activeHref: '#fill-gear-icon',

            iconWidth: 24,
            iconHeight: 24,
            iconColor: 'var(--font-color)',
        },
    },
];

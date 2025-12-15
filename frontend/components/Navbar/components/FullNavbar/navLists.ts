import type { NavLinkProps } from '@/UI/NavLink';

export const pageLinkList: NavLinkProps[] = [
    {
        href: '/',
        isActive: false,

        title: 'Home',

        'aria-label': 'Go to the homepage',

        icon: {
            href: '#home-icon',

            activeHref: '#fill-home-icon',

            width: 24,
            height: 24,
            color: 'var(--font-color)',
        },
    },

    {
        href: '/subscriptions',
        isActive: false,

        title: 'Subscriptions',

        'aria-label': 'Go to the subscriptions page',

        icon: {
            href: '#subscriptions-icon',
            activeHref: '#fill-subscriptions-icon',

            width: 24,
            height: 24,
            color: 'var(--font-color)',
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
            href: '#gear-icon',

            activeHref: '#fill-gear-icon',

            width: 24,
            height: 24,
            color: 'var(--font-color)',
        },
    },
];

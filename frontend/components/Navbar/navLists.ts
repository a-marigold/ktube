import type { NavLinkProps } from '@/UI/NavLink';

export type NavListLink = Omit<NavLinkProps, 'isActive'> & {
    activeIconHref: `#${string}`;
};

export const pageLinkList: NavListLink[] = [
    {
        href: '/',

        title: 'Home',

        'aria-label': 'Go to the homepage',

        icon: {
            href: '#home-icon',
            width: 24,
            height: 24,
            color: 'var(--font-color)',
        },

        activeIconHref: '#fill-home-icon',
    },

    {
        href: '/subscriptions',

        title: 'Subscriptions',

        'aria-label': 'Go to the subscriptions page',

        icon: {
            href: '#subscriptions-icon',
            width: 24,
            height: 24,
            color: 'var(--font-color)',
        },

        activeIconHref: '#fill-subscriptions-icon',
    },
];

export const settingsLinkList: NavListLink[] = [
    {
        href: '/settings',

        title: 'Settings',

        'aria-label': 'Go to the settings page',

        icon: {
            href: '#gear-icon',
            width: 24,
            height: 24,
            color: 'var(--font-color)',
        },

        activeIconHref: '#fill-gear-icon',
    },
];

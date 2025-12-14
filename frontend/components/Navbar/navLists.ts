import type { NavLinkProps } from '@/UI/NavLink';

export type NavListLink = Omit<NavLinkProps, 'isActive'>;

export const pageLinkList: NavListLink[] = [
    {
        href: '/',

        title: 'Home',

        'aria-label': 'Go to home page',

        icon: {
            href: '#home-icon',
            width: 24,
            height: 24,
        },
    },
];

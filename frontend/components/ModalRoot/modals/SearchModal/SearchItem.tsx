import Link from 'next/link';

import Image from 'next/image';

import searchStyles from './SearchModal.module.scss';

export interface SearchItemProps {
    href: string;

    title: string;
    imageUrl: string;
}
export default function SearchItem({ href, title, imageUrl }: SearchItemProps) {
    return (
        <Link href={href} className={searchStyles['search-item']} aria-label=''>
            <svg width={24} height={24} color='var(--font-color)'>
                <use href='#history-icon' />
            </svg>

            <span className={searchStyles['item-title']}>{title}</span>

            <Image
                src={imageUrl}
                width={53}
                height={32}
                alt={`Go to the "${title}" search results`}
            />
        </Link>
    );
}

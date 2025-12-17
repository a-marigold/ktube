import Link from 'next/link';

import Image from 'next/image';

import searchStyles from './SearchModal.module.scss';

export interface SearchItemProps {
    href: string;

    title: string;
    imageUrl?: string;
}
export default function SearchItem({ href, title, imageUrl }: SearchItemProps) {
    return (
        <Link
            href={href}
            className={searchStyles['search-item']}
            aria-label={`Go to the ${title} search results`}
        >
            <svg
                width={24}
                height={24}
                color='var(--font-color)'
                aria-hidden='true'
            >
                <use href='#history-icon' />
            </svg>

            <span className={searchStyles['item-title']}>{title}</span>

            {imageUrl && (
                <Image
                    src={imageUrl}
                    width={53}
                    height={32}
                    alt={`Video preview of the ${title} search results`}
                />
            )}
        </Link>
    );
}

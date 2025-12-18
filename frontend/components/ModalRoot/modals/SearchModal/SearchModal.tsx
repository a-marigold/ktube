'use client';

import { useRef } from 'react';

import { useCalculateModal } from '@/hooks/useCalculateModal';
import type { Position } from '@/utils/caclculateModalPosition';

import SearchItem from './SearchItem';
import type { SearchItemProps } from './SearchItem';

import searchStyles from './SearchModal.module.scss';

interface SearchModalProps {
    id?: string;

    relativeElement: HTMLElement;
    position: Position;
    gap?: number;
}
export default function SearchModal({
    relativeElement,
    position,

    id,

    gap,
}: SearchModalProps) {
    const __TEMPORARY_SEARCH_ITEMS: SearchItemProps[] = [
        { href: '', title: 'example' },
    ];

    const modalRef = useRef<HTMLUListElement>(null);

    useCalculateModal(modalRef, relativeElement, position, gap);

    return (
        <ul
            ref={modalRef}
            id={id}
            className={searchStyles['search-modal']}
            onClick={(event) => {
                event.stopPropagation();
            }}
        >
            {__TEMPORARY_SEARCH_ITEMS.map((item) => (
                <li key={item.href}>
                    <SearchItem {...item} />
                </li>
            ))}
        </ul>
    );
}

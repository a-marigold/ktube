'use client';

import { useRef } from 'react';
import type { HTMLAttributes } from 'react';

import { useCalculateModal } from '@/hooks/useCalculateModal';

import type { Position } from '@/utils/caclculateModalPosition';

import { useModalStore } from '@/store/ModalStore';

import SearchItem from './SearchItem';
import type { SearchItemProps } from './SearchItem';

import ModalBackdrop from '@/UI/ModalBackdrop';

import searchStyles from './SearchModal.module.scss';

interface SearchModalProps {
    id?: string;
    onMouseDown?: HTMLAttributes<HTMLUListElement>['onMouseDown'];

    relativeElement: HTMLElement;
    position: Position;
    gap?: number;
}
export default function SearchModal({
    id,
    onMouseDown,

    relativeElement,
    gap,
    position,
}: SearchModalProps) {
    const __TEMPORARY_SEARCH_ITEMS: SearchItemProps[] = [
        { href: '/se', title: 'example' },
    ];

    const modalRef = useRef<HTMLUListElement>(null);

    const closeModal = useModalStore((state) => state.closeModal);

    useCalculateModal(modalRef, relativeElement, position, gap);

    return (
        <ModalBackdrop background='empty' onClick={closeModal}>
            <ul
                ref={modalRef}
                id={id}
                className={searchStyles['search-modal']}
                onMouseDown={onMouseDown}
            >
                {__TEMPORARY_SEARCH_ITEMS.map((item) => (
                    <li key={item.href}>
                        <SearchItem {...item} />
                    </li>
                ))}
            </ul>
        </ModalBackdrop>
    );
}

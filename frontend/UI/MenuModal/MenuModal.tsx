import { useEffect, useRef } from 'react';

import type { RefObject } from 'react';

import { calculateModalPosition } from '@/utils/caclculateModalPosition';

import type { Position } from '@/utils/caclculateModalPosition';

import MenuLink, { type MenuLinkProps } from '@/UI/MenuLink';

import modalStyles from './MenuModal.module.scss';

export interface MenuModalProps {
    title: string;

    ref?: RefObject<HTMLElement | null>;

    onClose: () => void;

    relativeElement: HTMLElement;
    position: Position;

    gap?: number;

    linkList: MenuLinkProps[];
}
export default function MenuModal({
    ref,

    title,

    onClose,

    relativeElement,

    gap,
    position,
    linkList,
}: MenuModalProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (wrapperRef.current) {
            calculateModalPosition(
                wrapperRef.current,
                relativeElement,
                position
            );
        }

        if (ref) {
            ref.current = wrapperRef.current;
        }
    }, [relativeElement, position]);

    return (
        <div
            ref={wrapperRef}
            className={modalStyles['modal-wrapper']}
            onPointerLeave={(event) => {
                if (relativeElement === event.relatedTarget) return;

                onClose();
            }}
            style={{ padding: `${gap}px` }}
        >
            <div
                role='dialog'
                aria-modal='true'
                className={modalStyles['menu-modal']}
                aria-labelledby='menu-title'
            >
                <div className={modalStyles['head']}>
                    <h2 id='menu-title' className={modalStyles['title']}>
                        {title}
                    </h2>
                </div>

                <ul className={modalStyles['link-list']}>
                    {linkList.map((link) => (
                        <li key={link.title}>
                            <MenuLink {...link} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

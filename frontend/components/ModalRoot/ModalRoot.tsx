'use client';

import { useEffect } from 'react';

import { useModalStore } from '@/store/ModalStore';

import { lockBodyScroll, unlockBodyScroll } from '@/utils/lockBodyScroll';

export default function ModalRoot() {
    const currentModal = useModalStore((state) => state.currentModal);

    useEffect(() => {
        if (currentModal) {
            lockBodyScroll();
        }

        return () => {
            unlockBodyScroll();
        };
    }, [currentModal]);

    return currentModal;
}

'use client';

import { useEffect } from 'react';

import { useModalStore } from '@/store/ModalStore';

import { lockBodyScroll, unlockBodyScroll } from '@/utils/lockBodyScroll';

export default function ModalRoot() {
    const currentModal = useModalStore((state) => state.currentModal);
    const lockScroll = useModalStore((state) => state.lockScroll);

    useEffect(() => {
        if (currentModal && lockScroll) {
            lockBodyScroll();
        }

        return () => {
            unlockBodyScroll();
        };
    }, [currentModal, lockScroll]);

    return currentModal;
}

'use client';

import { useEffect } from 'react';

import { useModalStore } from '@/store/ModalStore';
import { useHotkeyStore } from '@/store/HotkeyStore';

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

    const closeModal = useModalStore((state) => state.closeModal);

    const registerHotkey = useHotkeyStore((state) => state.register);
    const unregisterHotkey = useHotkeyStore((state) => state.unregister);

    //  biome-ignore lint: lint / correctness / useExhaustiveDependencies
    useEffect(() => {
        registerHotkey({
            name: 'Close modal',
            key: 'Escape',
            callback: closeModal,
        });

        return () => {
            unregisterHotkey('Close modal');
        };
    }, []);

    return currentModal;
}

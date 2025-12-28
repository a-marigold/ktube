'use client';

import { useModalStore } from '@/store/ModalStore';

import { HotkeysInit } from '@/store/HotkeyStore';

export const useHotkeyConfig = (): HotkeysInit => {
    const closeModal = useModalStore((state) => state.closeModal);

    const hotkeyConfig: HotkeysInit = [
        [
            'Close modal',
            { name: 'Close modal', key: 'Escape', callback: closeModal },
        ],
    ];
    return hotkeyConfig;
};

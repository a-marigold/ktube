'use client';

import { useModalStore } from '@/store/ModalStore';

import { HotkeysInit } from '@/store/HotkeyStore';

export const useHotkeyConfig = (): {
    config: HotkeysInit;
    clear: () => void;
} => {
    const closeModal = useModalStore((state) => state.closeModal);

    const hotkeyConfig: HotkeysInit = [
        [
            'Close modal',
            { name: 'Close modal', key: 'Escape', callback: closeModal },
        ],
    ];
    /**
     * Sets `config` length to 0
     */
    const clear = () => {
        hotkeyConfig.length = 0;
    };

    return { config: hotkeyConfig, clear };
};

import type { ReactNode } from 'react';

import { create } from 'zustand';

interface ModalStore {
    currentModal: ReactNode;
    lockScroll: boolean;

    openModal: (modal: ReactNode, lockScroll?: boolean) => void;

    closeModal: () => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
    currentModal: null,
    lockScroll: false,

    openModal: (modal, lockScroll = true) =>
        set({ currentModal: modal, lockScroll }),

    closeModal: () => set({ currentModal: null }),
}));

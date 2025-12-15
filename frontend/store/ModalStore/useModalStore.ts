import type { ReactNode } from 'react';

import { create } from 'zustand';

interface ModalStore {
    currentModal: ReactNode;

    openModal: (modal: ReactNode) => void;

    closeModal: () => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
    currentModal: null,

    openModal: (modal) => set({ currentModal: modal }),

    closeModal: () => set({ currentModal: null }),
}));

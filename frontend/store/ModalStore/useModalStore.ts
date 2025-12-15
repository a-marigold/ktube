import type { ReactNode } from 'react';

import { create } from 'zustand';

interface ModalStore {
    currentModal: ReactNode;
}

export const useModalStore = create<ModalStore>()((set) => ({
    currentModal: null,
}));

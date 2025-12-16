'use client';

import { useModalStore } from '@/store/ModalStore';

export default function ModalRoot() {
    const currentModal = useModalStore((state) => state.currentModal);

    return currentModal;
}

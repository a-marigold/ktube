import type { ReactNode } from 'react';

import modalStyles from './ModalBackdrop.module.scss';

interface ModalBackdropProps {
    background?: 'dark' | 'empty';

    onClose: () => void;

    children: ReactNode;
}
export default function ModalBackdrop({
    background = 'empty',
    onClose,
    children,
}: ModalBackdropProps) {
    return (
        <div
            className={`${modalStyles['modal-backdrop']} ${
                modalStyles[`background-${background}`]
            }`}
            onClick={onClose}
        >
            {children}
        </div>
    );
}

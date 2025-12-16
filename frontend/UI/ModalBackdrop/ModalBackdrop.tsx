import type { ReactNode } from 'react';

import modalStyles from './ModalBackdrop.module.scss';

interface ModalBackdropProps {
    background?: 'dark' | 'empty';

    onClose: () => void;

    children: ReactNode;
}
export default function ModalBackdrop({
    background = 'dark',
    onClose,
    children,
}: ModalBackdropProps) {
    console.log(modalStyles);
    return (
        <div
            className={`${modalStyles['modal-backdrop']} ${
                modalStyles[`${background}`]
            }`}
            onClick={onClose}
        >
            {children}
        </div>
    );
}

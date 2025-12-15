import type { ReactNode } from 'react';

import modalStyles from './ModalBackdrop.module.scss';

interface ModalBackdropProps {
    type?: 'dark' | 'empty';

    onClose: () => void;

    children: ReactNode;
}
export default function ModalBackdrop({
    type = 'empty',
    onClose,
    children,
}: ModalBackdropProps) {
    return (
        <div
            className={`${modalStyles['modal-backdrop']} ${
                modalStyles[`type-${type}`]
            }`}
            onClick={onClose}
        >
            {children}
        </div>
    );
}

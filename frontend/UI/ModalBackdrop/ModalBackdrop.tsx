import type { ReactNode, ButtonHTMLAttributes } from 'react';

import modalStyles from './ModalBackdrop.module.scss';

interface ModalBackdropProps {
    background?: 'dark' | 'empty';

    onClick?: ButtonHTMLAttributes<HTMLDivElement>['onClick'];
    onMouseEnter?: ButtonHTMLAttributes<HTMLDivElement>['onMouseEnter'];

    children: ReactNode;
}
export default function ModalBackdrop({
    background = 'dark',
    onClick,
    onMouseEnter,
    children,
}: ModalBackdropProps) {
    return (
        <div
            className={`${modalStyles['modal-backdrop']} ${
                modalStyles[`${background}`]
            }`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        >
            {children}
        </div>
    );
}

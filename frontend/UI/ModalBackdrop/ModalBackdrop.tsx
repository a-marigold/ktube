import type { ReactNode, ButtonHTMLAttributes } from 'react';

import modalStyles from './ModalBackdrop.module.scss';

interface ModalBackdropProps {
    background?: 'dark' | 'empty';

    onClick?: ButtonHTMLAttributes<HTMLDivElement>['onClick'];
    onMouseOver?: ButtonHTMLAttributes<HTMLDivElement>['onMouseOver'];

    children: ReactNode;
}
export default function ModalBackdrop({
    background = 'dark',
    onClick,
    onMouseOver,
    children,
}: ModalBackdropProps) {
    return (
        <div
            className={`${modalStyles['modal-backdrop']} ${
                modalStyles[`${background}`]
            }`}
            onClick={onClick}
            onMouseOver={onMouseOver}
        >
            {children}
        </div>
    );
}

import ModalBackdrop from '@/UI/ModalBackdrop';

import MenuLink, { type MenuLinkProps } from '@/UI/MenuLink';

import modalStyles from './MenuModal.module.scss';

interface MenuModalProps {
    title: string;

    onClose: () => void;

    linkList: MenuLinkProps[];
}
export default function MenuModal({
    title,
    onClose,
    linkList,
}: MenuModalProps) {
    return (
        <ModalBackdrop background='empty' onClose={onClose}>
            <div
                role='dialog'
                aria-modal='true'
                className={modalStyles['menu-modal']}
                onClick={(event) => {
                    event.stopPropagation();
                }}
                aria-labelledby='menu-title'
            >
                <div className={modalStyles['head']}>
                    <h2 id='menu-title' className={modalStyles['title']}>
                        {title}
                    </h2>
                </div>

                <ul className={modalStyles['link-list']}>
                    {linkList.map((link) => (
                        <li key={link.title}>
                            <MenuLink {...link} />
                        </li>
                    ))}
                </ul>
            </div>
        </ModalBackdrop>
    );
}

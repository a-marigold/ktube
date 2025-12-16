import { useModalStore } from '@/store/ModalStore';

import modalStyles from './SubscriptionsModal.module.scss';

import MenuModal from '@/UI/MenuModal/MenuModal';

export default function SubscriptionsModal() {
    const closeModal = useModalStore((state) => state.closeModal);

    return (
        <MenuModal
            title='Subscriptions'
            onClose={closeModal}
            linkList={[
                {
                    href: '/',

                    title: 'hello',
                    icon: { href: '#home-icon', width: 24, height: 24 },
                },
            ]}
        />
    );
}

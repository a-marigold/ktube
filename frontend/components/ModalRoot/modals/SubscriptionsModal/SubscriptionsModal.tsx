import { useModalStore } from '@/store/ModalStore';

import MenuModal, { type MenuModalProps } from '@/UI/MenuModal';

type SubscriptionsModalProps = Pick<
    MenuModalProps,
    'relativeElement' | 'position'
>;
export default function SubscriptionsModal({
    ...props
}: SubscriptionsModalProps) {
    const closeModal = useModalStore((state) => state.closeModal);

    return (
        <MenuModal
            {...props}
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

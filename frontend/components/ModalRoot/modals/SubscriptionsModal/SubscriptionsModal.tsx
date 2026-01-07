import { useModalStore } from '@/store/ModalStore';

import MenuModal, { type MenuModalProps } from '@/UI/MenuModal';

type SubscriptionsModalProps = Pick<
    MenuModalProps,
    'relativeElement' | 'position' | 'gap' | 'ref'
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
                    icon: {
                        iconHref: '#home-icon',
                        iconWidth: 24,
                        iconHeight: 24,
                    },
                },
            ]}
        />
    );
}

'use client';

import { useRef } from 'react';

import { useUserStore } from '@/store/UserStore/useUserStore';
import { useNavbarStore } from '@/store/NavbarStore';
import { useModalStore } from '@/store/ModalStore';
import { useTooltipStore } from '@/store/TooltipStore';

import { MODAL_GAP } from '@/constants/modalGap';

import SearchModal from '../ModalRoot/modals/SearchModal';

import SearchInput from '@/UI/SearchInput/SearchInput';
import IconButton from '@/UI/IconButton';
import ReactionButton from '@/UI/ReactionButton';

import headerStyles from './Header.module.scss';

export default function Header() {
    const toggleNavbar = useNavbarStore((state) => state.toggleNavbar);

    const showTooltip = useTooltipStore((state) => state.show);
    const hideTooltip = useTooltipStore((state) => state.hide);

    const currentModal = useModalStore((state) => state.currentModal);
    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    const modalClickedRef = useRef<boolean>(false);

    const openSearchModal = (relativeElement: HTMLElement) => {
        openModal(
            <SearchModal
                relativeElement={relativeElement}
                position='bottom'
                onMouseDown={() => {
                    modalClickedRef.current = true;
                }}
                gap={12}
            />,

            false
        );
    };

    const user = useUserStore((state) => state.user);

    return (
        <header className={headerStyles['header']}>
            <div className={headerStyles['title-block']}>
                <IconButton
                    iconHref='#nav-toggle-icon'
                    iconWidth={24}
                    iconHeight={24}
                    aria-label='Toggle the sidebar panel'
                    onClick={toggleNavbar}
                    data-testid='navbar-toggle-button'
                />

                <div className={headerStyles['brand-block']}>
                    {/* __ICONS__ */}
                </div>
            </div>

            <SearchInput
                placeholder='Search'
                aria-label='Search for content'
                onFocus={(event) => {
                    openSearchModal(event.currentTarget);
                }}
                onBlur={() => {
                    if (modalClickedRef.current) return;

                    closeModal();
                }}
                onChange={(event) => {
                    if (!currentModal) {
                        openSearchModal(event.currentTarget);
                    }
                }}
            />

            <div className={headerStyles['tool-buttons']}>
                <IconButton
                    variant='empty'
                    iconHref='#notifications-icon'
                    iconWidth={24}
                    iconHeight={24}
                    aria-label='Open the notifications window'
                    onPointerEnter={(event) => {
                        showTooltip({
                            relativeElement: event.currentTarget,
                            title: 'Notifications',
                            position: 'bottom',
                            gap: MODAL_GAP,
                        });
                    }}
                    onPointerLeave={hideTooltip}
                />

                {!user && (
                    <ReactionButton
                        variant='accent'
                        title='Sign in'
                        aria-label='Sign in your account or create an account'
                        icon={{
                            iconHref: '#user-icon',
                            iconWidth: 24,
                            iconHeight: 24,
                            iconColor: 'var(--background-color)',
                        }}
                        data-testid='sign-in-button'
                    />
                )}
            </div>
        </header>
    );
}

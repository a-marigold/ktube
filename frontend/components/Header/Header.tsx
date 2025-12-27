'use client';

import { useRef } from 'react';

import { useNavbarStore } from '@/store/NavbarStore';
import { useModalStore } from '@/store/ModalStore';
import { useTooltipStore } from '@/store/TooltipStore';

import SearchModal from '../ModalRoot/modals/SearchModal';

import SearchInput from '@/UI/SearchInput/SearchInput';
import IconButton from '@/UI/IconButton';

import headerStyles from './Header.module.scss';

export default function Header() {
    const toggleNavbar = useNavbarStore((state) => state.toggleNavbar);

    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    const modalClickedRef = useRef<boolean>(false);

    const showTooltip = useTooltipStore((state) => state.show);
    const hideTooltip = useTooltipStore((state) => state.hide);

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
                aria-controls='search-modal'
                onFocus={(event) => {
                    openModal(
                        <SearchModal
                            id='search-modal'
                            relativeElement={event.currentTarget}
                            position='bottom'
                            onMouseDown={() => {
                                modalClickedRef.current = true;
                            }}
                            gap={12}
                        />,
                        false
                    );
                }}
                onBlur={() => {
                    if (modalClickedRef.current) return;

                    closeModal();
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
                            title: 'Notifications',
                            relativeElement: event.currentTarget,
                            position: 'bottom',
                        });
                    }}
                    onPointerLeave={hideTooltip}
                />
            </div>
        </header>
    );
}

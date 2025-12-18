'use client';

import { useNavbarStore } from '@/store/NavbarStore';
import { useModalStore } from '@/store/ModalStore';

import SearchModal from '../ModalRoot/modals/SearchModal';

import SearchInput from '@/UI/SearchInput/SearchInput';
import IconButton from '@/UI/IconButton';

import headerStyles from './Header.module.scss';

export default function Header() {
    const toggleNavbar = useNavbarStore((state) => state.toggleNavbar);

    const openModal = useModalStore((state) => state.openModal);

    const closeModal = useModalStore((state) => state.closeModal);

    return (
        <header className={headerStyles['header']}>
            <div className={headerStyles['title-block']}>
                <IconButton
                    href='#nav-toggle-icon'
                    width={24}
                    height={24}
                    aria-label='Toggle the sidebar panel'
                    onClick={() => toggleNavbar()}
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
                        />
                    );
                }}
                onBlur={closeModal}
            />

            <div className={headerStyles['tool-buttons']}>
                <IconButton
                    variant='empty'
                    href='#notifications-icon'
                    width={24}
                    height={24}
                    aria-label='Open the notifications window'
                />
            </div>
        </header>
    );
}

import IconButton from '@/UI/IconButton';

import headerStyles from './Header.module.scss';

export default function Header() {
    return (
        <header className={headerStyles['header']}>
            <div className={headerStyles['title-block']}>
                <IconButton
                    href='#nav-toggle-icon'
                    width={24}
                    height={24}
                    aria-label='Toggle the sidebar panel'
                />

                <div className={headerStyles['brand-block']}>
                    {/* __ICONS__ */}
                </div>
            </div>

            <input type='text' />

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

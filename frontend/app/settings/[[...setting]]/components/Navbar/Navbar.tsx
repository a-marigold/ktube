import type { ReactNode } from 'react';

import { settingContents } from '../../settingContents';
import type { Setting } from '../../types';

import SettingLink from '@/UI/SettingLink';

import navStyles from './Navbar.module.scss';

interface NavbarProps {
    currentSetting?: Setting;
}
export default function Navbar({ currentSetting }: NavbarProps) {
    const tabs: ReactNode[] = [];

    for (const setting in settingContents) {
        const content = settingContents[setting];

        tabs.push(
            <SettingLink
                key={setting}
                href={'/settings/' + setting}
                aria-label={'Go to the ' + content.name + ' settings'}
                isActive={setting === currentSetting}
                title={content.name}
            />,
        );
    }

    return (
        <nav className={navStyles['navbar']}>
            <span className={navStyles['title']}>Settings</span>

            {tabs}
        </nav>
    );
}

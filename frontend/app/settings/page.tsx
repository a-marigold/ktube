import type { Metadata } from 'next';

import Navbar from './components/Navbar';

import ContentBox from './components/ContentBox';

import settingStyles from './Settings.module.scss';

export const metadata: Metadata = {
    title: 'Settings',
};

export default function SettingsPage() {
    return (
        <div className={settingStyles['settings-page']}>
            <Navbar />

            <ContentBox />
        </div>
    );
}

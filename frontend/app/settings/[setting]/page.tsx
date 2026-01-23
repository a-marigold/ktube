import type { Metadata } from 'next';

import Navbar from './components/Navbar';

import ContentBox from './components/ContentBox';

import settingStyles from './Setting.module.scss';

export const metadata: Metadata = {
    title: 'Settings',
};
interface SettingPageProps {
    params: Promise<{ setting: string }>;
}
export default function SettingPage({ params }: SettingPageProps) {
    return params.then((params) => {
        return (
            <div className={settingStyles['setting-page']}>
                <Navbar currentSetting={params.setting} />

                <ContentBox />
            </div>
        );
    });
}

// TODO: add utility types for `params` and `searchParms`

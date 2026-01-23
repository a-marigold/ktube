import type { Metadata } from 'next';

import Navbar from './components/Navbar';

import ContentBox from './components/ContentBox';

import settingStyles from './Setting.module.scss';

interface SettingPageProps {
    params: Promise<{ setting?: string[] }>;
}

export const generateMetadata = ({
    params,
}: SettingPageProps): Promise<Metadata> => {
    return params.then((resolvedParams) => {
        const currentSetting = resolvedParams.setting?.[0];

        return {
            title: currentSetting ? 'Settings | ' + currentSetting : 'Settings',
        };
    });
};

export default function SettingPage({ params }: SettingPageProps) {
    return params.then((resolvedParams) => {
        const currentSetting = resolvedParams.setting?.[0];

        return (
            <div className={settingStyles['setting-page']}>
                <Navbar currentSetting={currentSetting} />
                <ContentBox />
            </div>
        );
    });
}

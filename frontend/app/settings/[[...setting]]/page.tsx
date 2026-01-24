import type { Metadata } from 'next';

import type { Setting } from './types';

import Navbar from './components/Navbar';

import { settingContents } from './settingContents';

import ContentBox from './components/ContentBox';

import settingStyles from './Setting.module.scss';

interface SettingPageProps {
    params: Promise<{ setting?: [Setting] }>;
}

export const generateMetadata = ({
    params,
}: SettingPageProps): Promise<Metadata> => {
    return params.then((resolvedParams) => {
        const currentSetting = resolvedParams.setting?.[0];

        const settingName = currentSetting
            ? settingContents[currentSetting].name
            : undefined;

        return {
            title: settingName ? 'Settings | ' + settingName : 'Settings',
        };
    });
};

export default function SettingPage({ params }: SettingPageProps) {
    return params.then((resolvedParams) => {
        const currentSetting = resolvedParams.setting?.[0];

        return (
            <div className={settingStyles['setting-page']}>
                <Navbar currentSetting={currentSetting} />
                <ContentBox currentSetting={currentSetting} />
            </div>
        );
    });
}

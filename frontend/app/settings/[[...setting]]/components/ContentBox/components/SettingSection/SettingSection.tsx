import type { SettingSection as SettingSectionProps } from '../../../../settingContents';

import SettingGroup from '../../../SettingGroup';

import settingStyles from './SettingSection.module.scss';

export default function SettingSection({
    title,
    description,

    groups,
}: SettingSectionProps) {
    return (
        <section className={settingStyles['setting-section']}>
            <header className={settingStyles['header']}>
                <h2 className={settingStyles['title']}>{title}</h2>

                <p className={settingStyles['description']}>{description}</p>
            </header>

            {groups}
        </section>
    );
}

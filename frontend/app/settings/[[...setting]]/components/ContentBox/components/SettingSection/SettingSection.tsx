import type { SettingSection } from '../../../../settingContents';

import settingStyles from './SettingSection.module.scss';

export default function SettingSection({
    name,
    description,

    groups,
}: SettingSection) {
    return (
        <section className={settingStyles['setting-section']}>
            <header className={settingStyles['header']}>
                <h2 className={settingStyles['title']}>{name}</h2>

                <p className={settingStyles['description']}>{description}</p>
            </header>

            <div className={settingStyles['groups']}>{groups.toString()}</div>
        </section>
    );
}

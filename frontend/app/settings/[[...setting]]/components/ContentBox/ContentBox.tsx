import { settingContents } from '../../settingContents';

import SettingSection from './components/SettingSection';

import contentStyles from './ContentBox.module.scss';

interface ContentBoxProps {
    currentSetting?: string;
}
export default function ContentBox({ currentSetting }: ContentBoxProps) {
    if (!currentSetting) {
        return null;
    }

    const content = settingContents[currentSetting];

    return (
        <main className={contentStyles['content-box']}>
            <div className={contentStyles['head']}>
                <span className={contentStyles['setting-name']}>
                    {content.name}
                </span>

                <div className={contentStyles['text-block']}>
                    <h1 className={contentStyles['title']}>{content.title}</h1>
                    {content.description && (
                        <p className={contentStyles['description']}>
                            {content.description}
                        </p>
                    )}
                </div>
            </div>

            <div className={contentStyles['content-box']}>
                {content.sections.map((section) => (
                    <SettingSection key={section.title} {...section} />
                ))}
            </div>
        </main>
    );
}

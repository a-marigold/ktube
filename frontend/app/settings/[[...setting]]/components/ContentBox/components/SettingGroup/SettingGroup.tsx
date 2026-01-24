import type { SettingGroup as SettingGroupProps } from '@/app/settings/[[...setting]]/settingContents';

import groupStyles from './SettingGroup.module.scss';

export default function SettingGroup({ title, controls }: SettingGroupProps) {
    return (
        <div className={groupStyles['setting-group']}>
            <h3 className={groupStyles['title']}> {title}</h3>

            {controls}
        </div>
    );
}

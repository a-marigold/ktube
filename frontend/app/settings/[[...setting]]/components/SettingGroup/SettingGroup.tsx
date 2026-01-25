import type { ReactNode } from 'react';

import groupStyles from './SettingGroup.module.scss';

interface SettingGroupProps {
    title: string;

    children: ReactNode;
}

export default function SettingGroup({ title, children }: SettingGroupProps) {
    return (
        <div className={groupStyles['setting-group']}>
            <h3 className={groupStyles['title']}> {title}</h3>

            {children}
        </div>
    );
}

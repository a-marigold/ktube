'use client';

import { useTooltipStore } from '@/store/TooltipStore';

import SwitchSettingControl from '@settings/components/SwitchSettingControl';
import SettingGroup from '@settings/components/SettingGroup';

import controlStyles from './ControlGroups.module.scss';

export default function ControlGroups() {
    const tooltipsEnabled = useTooltipStore((state) => state.enabled);
    const toggleTooltipsEnabled = useTooltipStore(
        (state) => state.toggleEnabled,
    );

    return (
        <div className={controlStyles['groups']}>
            <SettingGroup title='Tooltips'>
                <SwitchSettingControl
                    title='Enable tooltips'
                    description='Tooltips are block hints that bubble on hover on buttons. They are disabled on mobiles.'
                    value={tooltipsEnabled}
                    onChange={toggleTooltipsEnabled}
                    switchAriaLabel='Enable tooltips'
                />
            </SettingGroup>
        </div>
    );
}

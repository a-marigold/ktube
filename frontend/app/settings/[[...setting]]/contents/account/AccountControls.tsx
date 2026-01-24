'use client';

import { useTooltipStore } from '@/store/TooltipStore';

import { SwitchSettingControl } from '../../components/ContentBox/components';

import controlStyles from './AccountControls.module.scss';

export default function AccountControls() {
    const tooltipsEnabled = useTooltipStore((state) => state.enabled);
    const toggleTooltipsEnabled = useTooltipStore(
        (state) => state.toggleEnabled,
    );

    return (
        <div className={controlStyles['controls']}>
            <SwitchSettingControl
                title='Enable tooltips'
                description='Tooltips are block hints that bubble on hover on buttons. They are disabled on mobiles.'
                value={tooltipsEnabled}
                onChange={toggleTooltipsEnabled}
                switchAriaLabel='Enable tooltips'
            />
        </div>
    );
}

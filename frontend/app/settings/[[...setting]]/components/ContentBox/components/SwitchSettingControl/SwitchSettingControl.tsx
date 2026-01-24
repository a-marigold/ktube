import Switch from '@/UI/Switch';
import type { SwitchProps } from '@/UI/Switch/Switch';
import controlStyles from './SwitchSettingControl.module.scss';

interface SwitchSettingControlProps extends Pick<
    SwitchProps,
    'value' | 'onChange'
> {
    title: string;

    description?: string;

    switchAriaLabel: string;
}

export const SwitchSettingControl = ({
    title,
    description,

    value,

    onChange,

    switchAriaLabel,
}: SwitchSettingControlProps) => {
    return (
        <div className={controlStyles['switch-setting-control']}>
            <Switch
                value={value}
                onChange={onChange}
                ariaLabel={switchAriaLabel}
            />

            <div className={controlStyles['text-block']}>
                <span className={controlStyles['title']}>{title}</span>

                {description && (
                    <p className={controlStyles['description']}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

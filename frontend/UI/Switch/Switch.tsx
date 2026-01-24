import switchStyles from './Switch.module.scss';

export interface SwitchProps {
    value: boolean;

    ariaLabel: string;

    className?: string;

    onChange: () => void;
}

export default function Switch({
    value,
    ariaLabel,
    className,
    onChange,
}: SwitchProps) {
    console.log(value);
    return (
        <button
            type='button'
            role='switch'
            className={`${switchStyles['switch']} ${className ?? ''}`}
            aria-checked={value}
            aria-label={ariaLabel}
            onPointerDown={onChange}
        >
            <div className={switchStyles['thumb']}>
                <div className={switchStyles['focus-block']}></div>
            </div>
        </button>
    );
}

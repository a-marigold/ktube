import SettingLink from '@/UI/SettingLink';

import navStyles from './Navbar.module.scss';

interface NavbarProps {
    currentSetting?: string;
}
export default function Navbar({ currentSetting }: NavbarProps) {
    const tabs = ['Account'];

    return (
        <nav className={navStyles['navbar']}>
            <span className={navStyles['title']}>Settings</span>

            {tabs.map((tab) => (
                <SettingLink
                    href={'/settings/' + tab}
                    key={tab}
                    aria-label={`Go to the ${tab} settings`}
                    isActive={tab === currentSetting}
                    title={tab}
                />
            ))}
        </nav>
    );
}

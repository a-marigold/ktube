import type { WellKnownHotkey } from '@/types/Hotkey';

export const wellKnownHotkeys: { [K in WellKnownHotkey]: WellKnownHotkey } = {
    'Toggle video playing': 'Toggle video playing',

    'Second way to toggle video playing': 'Second way to toggle video playing',

    'Increase video volume': 'Increase video volume',

    'Decrease video volume': 'Decrease video volume',
} as const;

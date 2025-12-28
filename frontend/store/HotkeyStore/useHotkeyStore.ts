import { create } from 'zustand';

import type { Hotkey } from '@/types/Hotkey';

interface HotkeyStore {
    hotkeys: Map<Hotkey['name'], Hotkey>;

    register: (hotkey: Hotkey) => void;
}

export const useHotkeyStore = create<HotkeyStore>()((set) => ({
    hotkeys: new Map(),

    register: (hotkey) =>
        set((state) => {
            const newHotkeys = new Map<Hotkey['name'], Hotkey>(state.hotkeys);

            newHotkeys.set(hotkey.name, hotkey);

            return {
                hotkeys: newHotkeys,
            };
        }),
}));

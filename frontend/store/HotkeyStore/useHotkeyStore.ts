import { create } from 'zustand';

import type { Hotkey } from '@/types/Hotkey';

interface HotkeyStore {
    hotkeys: Map<Hotkey['name'], Hotkey>;

    register: (
        name: Hotkey['name'],
        key: Hotkey['key'],
        callback: Hotkey['callback']
    ) => void;
}

export const useHotkeyStore = create<HotkeyStore>()((set) => ({
    hotkeys: new Map(),

    register: (name, key, callback) =>
        set((state) => {
            const newHotkeys = new Map<Hotkey['name'], Hotkey>(state.hotkeys);

            newHotkeys.set(name, { name, key, callback });

            return {
                hotkeys: newHotkeys,
            };
        }),
}));

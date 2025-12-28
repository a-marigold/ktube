import { create } from 'zustand';

import type { Hotkey } from '@/types/Hotkey';

type HotkeysInit = [Hotkey['name'], Hotkey][];

interface HotkeyStore {
    hotkeys: Map<Hotkey['name'], Hotkey>;

    register: (hotkey: Hotkey) => void;

    initialize: (hotkeysInit: HotkeysInit) => void;
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

    initialize: (hotkeysInit: HotkeysInit) =>
        set({ hotkeys: new Map(hotkeysInit) }),
}));

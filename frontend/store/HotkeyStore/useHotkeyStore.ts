import { create } from 'zustand';

import type { Hotkey } from '@/types/Hotkey';

export type HotkeysInit = [Hotkey['name'], Hotkey][];

type Hotkeys = Map<Hotkey['name'], Hotkey>;

interface HotkeyStore {
    hotkeys: Hotkeys;

    register: (hotkey: Hotkey) => void;

    initialize: (hotkeysInit: HotkeysInit) => void;

    unregister: (name: Hotkey['name']) => void;
}

export const useHotkeyStore = create<HotkeyStore>()((set) => ({
    hotkeys: new Map(),

    register: (hotkey) =>
        set((state) => {
            const newHotkeys: Hotkeys = new Map(state.hotkeys);

            newHotkeys.set(hotkey.name, hotkey);

            return {
                hotkeys: newHotkeys,
            };
        }),

    unregister: (name: Hotkey['name']) =>
        set((state) => {
            const newHotkeys: Hotkeys = new Map(state.hotkeys);

            newHotkeys.delete(name);

            return {
                hotkeys: newHotkeys,
            };
        }),

    initialize: (hotkeysInit: HotkeysInit) =>
        set({ hotkeys: new Map(hotkeysInit) }),
}));

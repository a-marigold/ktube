import { create } from 'zustand';

import type { TooltipProps } from '@/UI/Tooltip';

interface TooltipStore {
    enabled: boolean;

    currentProps: TooltipProps | null;
    show: (props: TooltipProps | null) => void;
    hide: () => void;
    toggleEnabled: () => void;
}

export const useTooltipStore = create<TooltipStore>()((set) => ({
    currentProps: null,

    enabled: true,

    toggleEnabled: () =>
        set((state) => ({
            enabled: !state.enabled,
        })),

    show: (props) => set({ currentProps: props }),

    hide: () => set({ currentProps: null }),
}));

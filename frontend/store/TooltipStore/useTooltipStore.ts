import { create } from 'zustand';

import type { TooltipProps } from '@/UI/Tooltip';

interface TooltipStore {
    currentProps: TooltipProps | null;
    show: (props: TooltipProps | null) => void;
    hide: () => void;
}

export const useTooltipStore = create<TooltipStore>()((set) => ({
    currentProps: null,

    show: (props) => set({ currentProps: props }),

    hide: () => set({ currentProps: null }),
}));

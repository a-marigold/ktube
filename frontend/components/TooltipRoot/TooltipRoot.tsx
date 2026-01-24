'use client';

import { useTooltipStore } from '@/store/TooltipStore';

import Tooltip from '@/UI/Tooltip';

export default function TooltipRoot() {
    const enabled = useTooltipStore((state) => state.enabled);
    const currentProps = useTooltipStore((state) => state.currentProps);

    return enabled && currentProps && <Tooltip {...currentProps} />;
}

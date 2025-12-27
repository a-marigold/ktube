'use client';

import { useTooltipStore } from '@/store/TooltipStore';

import Tooltip from '@/UI/Tooltip';

export default function TooltipRoot() {
    const currentProps = useTooltipStore((state) => state.currentProps);

    return currentProps && <Tooltip {...currentProps} />;
}

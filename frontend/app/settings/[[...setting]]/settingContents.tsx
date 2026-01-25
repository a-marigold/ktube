import type { ReactNode } from 'react';

import type { Setting } from './types';

import { accountContent } from './contents/account';
import { controlContent } from './contents/control';

/**
 * The type of setting content.
 *
 * @example
 * ```bash
 * SettingContent ('Notifications') /
 *     SettingSection ('Browser notifications') /
 *         SettingGroup ('General') /
 *             SettingControl ('Enable notifications in browser')
 *             SettingControl ('Enable notifications about subscriptions ')
 *             ...
 *
 *     SettingSection ('Email notifications') /
 *         SettingGroup ('General') /
 *             SettingControl ('Enable email notifications')
 *             SettingControl ('Enable notifications about news')
 *             ...
 *     ...
 * ...
 * ```
 */

export type SettingContent = {
    name: string;

    title: string;
    description?: string;

    sections: SettingSection[];
};

export type SettingSection = {
    title: string;

    description?: string;

    groups: ReactNode;
};

export const settingContents: Record<Setting, SettingContent> = {
    account: accountContent,

    control: controlContent,
};

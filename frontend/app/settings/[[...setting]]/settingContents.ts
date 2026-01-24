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
    description?: string;
    sections: SettingSection[];
};

export type SettingSection = {
    name: string;
    description?: string;
    groups: SettingGroup[];
};

export type SettingGroup = {
    name: string;

    controls: SettingControl[];
};
export type SettingControl = {
    name: string;

    description: string;
};

export const settingContents: Record<string, SettingContent> = {
    account: {
        name: 'Information about you',

        sections: [
            {
                name: 'Your account',

                groups: [{ name: 'Information about you', controls: [] }],
            },
        ],
    },
};

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
    groups: SettingGroup[];
};

export type SettingGroup = {
    title: string;

    controls: SettingControl[];
};
export type SettingControl = {
    name: string;

    description: string;
};

export const settingContents: Record<string, SettingContent> = {
    account: {
        name: 'Account',
        title: 'Information about you',

        description: 'hello',
        sections: [
            {
                title: 'Your account',
                description: 'hello',

                groups: [{ title: 'Information about you', controls: [] }],
            },
        ],
    },
};

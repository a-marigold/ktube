import type { SettingContent } from '../../settingContents';

import AccountControls from './AccountControls';

export const accountContent: SettingContent = {
    name: 'Account',

    title: 'Information about you',

    description: 'hello',
    sections: [
        {
            title: 'Your account',
            description: 'hello',
            groups: [
                {
                    title: 'Information about you',

                    controls: <AccountControls />,
                },
            ],
        },
    ],
};

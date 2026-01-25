import type { SettingContent } from '../../settingContents';

import ControlGroup from './ControlGroups';

export const controlContent: SettingContent = {
    name: 'Control',
    title: 'Configure hotkeys, Video Player settings',
    sections: [{ title: 'General', groups: <ControlGroup /> }],
};

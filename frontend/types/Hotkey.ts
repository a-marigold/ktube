export type Hotkey = {
    /**
     * @example "Open the search window"
     */
    name: WellKnownHotkey | (string & {});

    /**
     * @example "Ctrl+K" or "Ctrl + K" or "ctrl + k"
     */
    key: string;
    /**
     * Function that will be called when `Hotkey.key` matches
     *
     *
     *
     * @param {KeyboardEvent} event
     *
     *
     */
    callback: (event: KeyboardEvent) => void;
};

export type WellKnownHotkey =
    | 'Toggle video playing'
    | 'Second way to toggle video playing'
    | 'Increase video volume'
    | 'Decrease video volume';

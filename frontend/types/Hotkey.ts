export type Hotkey = {
    /**
     * @example "Open the search window"
     */
    name: WellKnownHotkey | (string & {});

    /**
     * Combintaion of key codes.
     *
     * All the keys should be like the second part of `KeyboardEvent.prototype.code`, for example - `K` will be transformed to `KeyK`, `ArrowUp` will be transformed to `ArrowUp`, `Escape` will be transformed to `Escape`
     *
     *
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

/**
 *
 *
 * The most used `Hotkey` names in app
 */
export type WellKnownHotkey =
    | 'Close modal'
    | 'Toggle video playing'
    | 'Second way to toggle video playing'
    | 'Increase video volume'
    | 'Decrease video volume'
    | 'Open video in full screen';

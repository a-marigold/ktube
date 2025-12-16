/**
 * Locks vertical element scroll (overflowY: 'hidden') and adds paddingRight to avoid layout jumps
 *
 * @param {HTMLElement} element - element whose scroll will be locked
 */
export const lockElementScroll = (element: HTMLElement) => {
    const elementPaddingRight = parseInt(
        getComputedStyle(element).paddingRight
    );
    const elementOffsetWidth = element.offsetWidth;
    const elementClientWidth = element.clientWidth;

    element.style.paddingRight = `${
        elementPaddingRight + (elementOffsetWidth - elementClientWidth)
    }px`;
    element.style.overflowY = 'hidden';
};

/**
 * Unlocks vertical element scroll (overflowY: '') and removes paddingRight in style of element
 *
 * @param {HTMLElement} element - element whose scroll will be unlocked
 */
export const unlockElementScroll = (element: HTMLElement) => {
    element.style.paddingRight = '';
    element.style.overflowY = '';
};

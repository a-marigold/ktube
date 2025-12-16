/**
 * @returns {number} paddingRight that equals to body paddingRight + scrollbar width
 */
export const getBodyScrollLockGap = (): number => {
    const elementPaddingRight =
        parseInt(getComputedStyle(document.body).paddingRight, 10) || 0;
    const windowInnerWidth = window.innerWidth;
    const documentClientWidth = document.documentElement.clientWidth;

    return elementPaddingRight + windowInnerWidth - documentClientWidth;
};

/**
 * Locks element scroll (overflow: 'hidden') and adds paddingRight to avoid layout jumps
 **/
export const lockBodyScroll = () => {
    const scrollLockGap = getBodyScrollLockGap();
    document.body.style.paddingRight = `${scrollLockGap}px`;
    document.body.style.boxSizing = 'border-box';
    document.body.style.overflow = 'hidden';
};

/**
 * Unlocks body scroll (overflow: '') and removes paddingRight in the style of body
 */
export const unlockBodyScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.boxSizing = '';
    document.body.style.overflow = '';
};

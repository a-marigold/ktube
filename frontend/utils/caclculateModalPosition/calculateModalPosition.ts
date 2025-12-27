export type Position = 'top' | 'right' | 'bottom' | 'left';

/**
 * Calculates modal position relative to `relativeElement` and changes modal styles.
 *
 * Need to set the following css for `modalElement`:
 * ```css
 * position: absolute; // or fixed
 * top: 0;
 * left: 0;
 * ```
 *
 *
 * @param {HTMLElement} modalElement modal html element
 * @param {HTMLElement} relativeElement element, relative to which the `modalElement` will be positioned
 * @param {Position} position `top`, `right`, `bottom`, `left` relative to the `relativeElement`
 * @param {number} gap distance between the `relativeElement` and `modalElement`
 */
export const calculateModalPosition = (
    modalElement: HTMLElement,
    relativeElement: HTMLElement,

    position: Position,
    gap: number = 0
): void => {
    const modalRect = modalElement.getBoundingClientRect();

    const relativeRect = relativeElement.getBoundingClientRect();

    let modalLeft = 0;

    let modalTop = 0;

    const centerX =
        relativeRect.left + relativeRect.width / 2 - modalRect.width / 2;

    const centerY =
        relativeRect.top + relativeRect.height / 2 - modalRect.height / 2;

    const positionHandlersMap: Record<Position, () => void> = {
        top: () => {
            modalLeft = centerX;

            modalTop = relativeRect.top - modalRect.height - gap;
        },
        right: () => {
            modalLeft = relativeRect.right + gap;
            modalTop = centerY;
        },
        bottom: () => {
            modalLeft = centerX;
            modalTop = relativeRect.bottom + gap;
        },
        left: () => {
            modalLeft = relativeRect.left - gap;
            modalTop = centerY;
        },
    };

    positionHandlersMap[position]();

    modalElement.style.transform = `translate(${modalLeft}px, ${modalTop}px)`;
};

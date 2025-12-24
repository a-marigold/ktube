import { useState, useEffect } from 'react';

/**
 * Subscribes media query with `queryString` via useEffect.
 *
 * @param {string} queryString Media query string. For example, `'(max-width: 1600px)'`.
 *
 * @returns {boolean} boolean value that reflects current media query statement.
 *
 * @example
 *
 * ```tsx
 * const maxWidthMatches = useMediaQuery('(min-width: 1600px)');
 *
 *
 * return <div style={{ color: maxWidthMatches ? 'red' : 'black' }}> Hello </div>;
 * ```
 */
export const useMediaQuery = (queryString: string) => {
    const [isMatched, setIsMatched] = useState<boolean>(() => {
        return window.matchMedia(queryString).matches;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(queryString);

        const handleChange = (event: MediaQueryListEvent) => {
            setIsMatched(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return isMatched;
};

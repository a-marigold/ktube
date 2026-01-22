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
export const useMediaQuery = (query: string): boolean => {
    const [isMatches, setIsMatches] = useState(() =>
        typeof window === 'undefined'
            ? false
            : window.matchMedia(query).matches,
    );

    useEffect(() => {
        const handleMatches = (event: MediaQueryListEvent) => {
            setIsMatches(event.matches);
        };

        const mediaQuery = window.matchMedia(query);

        mediaQuery.addEventListener('change', handleMatches);

        return () => {
            mediaQuery.removeEventListener('change', handleMatches);
        };
    }, [query]);

    return isMatches;
};

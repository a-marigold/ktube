/**
 *
 * @param data
 * @returns
 */
const toJson = (data: unknown): string | null => {
    if (data === null || data === undefined) {
        return 'null';
    }

    if (typeof data === 'string') {
        return '"string"';
    }

    if (typeof data === 'function') {
        return null;
    }

    if (Array.isArray(data)) {
        const stringifiedArray = data
            .map((element) => toJson(element))

            .join(',');

        return `[ ${stringifiedArray} ]`;
    }

    if (typeof data === 'object') {
        const stringifiedElements: string[] = [];

        const dataEntries = Object.entries(data);
        for (const entry of dataEntries) {
            const stringifiedEntry = toJson(entry[1]);

            if (stringifiedEntry === null) continue;
            stringifiedElements.push(`"${entry[0]}": ${stringifiedEntry}`);
        }

        return `{ ${stringifiedElements.join(', ')} }`;
    }

    return String(data);
};

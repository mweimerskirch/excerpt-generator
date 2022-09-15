export function createExcerpt(input: string, search: string, wordsAround: number, maximumLength: number) {
    let output = ''

    // Escape "search" variable before putting it in the regex
    search = escapeRegExpString(search)

    const regex = new RegExp('(?:((?:[^\\s.,;]+[\\s.,;]+){0,' + wordsAround + '})(\\b' + search + '\\b)((?:[\\s.,;]+[^\\s.,;]+){0,' + wordsAround + '}))', 'gmius');

    if (input.search(regex) === -1) {
        // Match not found, we'll return the maximum length, starting from the beginning
        if (input.length > maximumLength)
            output = input.substring(0, maximumLength - 2).trim() + ' …';
        else
            output = input
    } else {
        let previousEnd = 0
        let match;

        while (match = regex.exec(input)) {
            // re-start after the last match
            regex.lastIndex = match.index + match[1].length + match[2].length;

            let beginning = match[1]
            let end = match[3]

            if (match.index < previousEnd) {
                const overlap = previousEnd - match.index;
                beginning = beginning.substring(overlap + 1);
            } else if (match.index > 0) {
                if (match.index == previousEnd + 1)
                    beginning = ' ' + beginning
                else
                    beginning = '… ' + beginning
            }

            let excerpt = `${beginning}<strong>${match[2]}</strong>${end}`;
            output += excerpt

            previousEnd = match.index + match[0].length

            // If we've reached the maximum length, ignore the remaining matches
            if (output.length >= maximumLength) break;
        }

        output += ' …'
    }

    return output;
}

function escapeRegExpString(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

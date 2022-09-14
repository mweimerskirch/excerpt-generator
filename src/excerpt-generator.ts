export function createExcerpt(input: string, search: string, wordsAround: number, maximumLength: number) {
    let output = ''

    // FIXME: escape "search" variable before putting it in the regex

    const regex = new RegExp('(?:((?:[^\\s.,;]+[\\s.,;]+){0,' + wordsAround + '})(\\b' + search + '\\b)((?:[\\s.,;]+[^\\s.,;]+){0,' + wordsAround + '}))', 'gmius');
    console.log(regex)
    if (input.search(regex) === -1) {
        // Match not found, we'll return the maximum length, starting from the beginning
        if (input.length > maximumLength)
            output = input.substring(0, maximumLength - 2).trim() + ' …';
        else
            output = input
    } else {
        const matches = input.matchAll(regex)
        let previousEnd = 0

        // @ts-ignore
        for (const match of matches) {
            //console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
            let beginning = match[1]
            let end = match[3]

            // console.log(match.index)
            // console.log(previousEnd)
            if (match.index <= previousEnd) {
                const overlap = previousEnd - match.index;
                // console.log(overlap)
                beginning = beginning.substring(overlap + 1);
            } else if (match.index > 0) {
                if (match.index == previousEnd + 1)
                    beginning = ' ' + beginning
                else
                    beginning = '… ' + beginning
            }

            let excerpt = `${beginning}<strong>${match[2]}</strong>${end}`;
            output += excerpt

            // console.log(excerpt)

            previousEnd = match.index + match[0].length

            // If we've reached the maximum length, ignore the remaining matches
            if (output.length >= maximumLength) break;
        }

        output += ' …'
    }

    return output;
}

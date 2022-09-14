export function createExcerpt(input: string, search: string, wordsAround: number, maximumLength: number) {
    let excerpt = "";

    // FIXME: escape "search" variable before putting it in the regex

    const regex = new RegExp('(?:((?:[^\\s.,;]+[\\s.,;]+){0,' + wordsAround + '})(\\b' + search + '\\b)((?:[\\s.,;]+[^\\s.,;]+){0,' + wordsAround + '}))', 'gmius');
    console.log(regex)
    if (input.search(regex) === -1) {
        // Match not found, we'll return the maximum length, starting from the beginning
        if (input.length > maximumLength)
            excerpt = input.substring(0, maximumLength - 2).trim() + ' …';
        else
            excerpt = input
    } else {
        const matches = input.matchAll(regex)
        console.log(matches)

        // @ts-ignore
        for (const match of matches) {
            //console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
            excerpt = `${match[1]}<strong>${match[2]}</strong>${match[3]}`;
            if (match.index > 0) excerpt = '… ' + excerpt;

            excerpt += ' …'
            console.log(excerpt)
        }

    }
    return excerpt;
}

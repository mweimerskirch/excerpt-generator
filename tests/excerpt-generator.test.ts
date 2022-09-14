import {createExcerpt} from "../src/excerpt-generator";


let singleMatchSearch = "lobortis";
let noMatchSearch = "loremipsum";
let multipleMatchSearch = "est";

let shortInput = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let longInput = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis eros eget est vulputate, nec blandit nunc lacinia. Vestibulum finibus maximus nisi ultricies efficitur. Duis purus nibh, porta a dictum ut, dapibus non erat. Nunc vehicula metus nec gravida lacinia. Vestibulum faucibus pharetra semper. Morbi lacinia et mauris ac vulputate. Nulla justo ligula, finibus ut dolor eu, aliquam lacinia ante. Pellentesque ultrices eros non gravida pulvinar. Ut hendrerit, est nec consequat suscipit, erat nulla pharetra neque, in luctus tellus justo a dui. Ut feugiat, turpis efficitur pellentesque rutrum, nibh magna tristique arcu, sed tincidunt dui turpis ut urna. Duis commodo nec velit eget fringilla. Proin imperdiet varius consectetur. Vivamus sit amet pharetra velit, vitae aliquet libero. Suspendisse consequat ligula tortor, quis tempus lacus tempus in.";

describe('testing excerpt generation', () => {
    test('no match on short string should return entire string', () => {
        expect(createExcerpt(shortInput, noMatchSearch, 5, 200)).toBe(shortInput);
    });
    test('no match on long string should return first 200 characters', () => {
        expect(createExcerpt(longInput, noMatchSearch, 5, 200)).toHaveLength(199)
    });
    test('single match should return simple excerpt', () => {
        expect(createExcerpt(longInput, singleMatchSearch, 5, 200)).toBe('… amet, consectetur adipiscing elit. Cras <strong>lobortis</strong> eros eget est vulputate, nec …');
    });
    test('multiple matches should return a longer excerpt with an ellipsis in between', () => {
        expect(createExcerpt(longInput, multipleMatchSearch, 5, 200)).toBe('… elit. Cras lobortis eros eget <strong>est</strong> vulputate, nec blandit nunc lacinia… non gravida pulvinar. Ut hendrerit, <strong>est</strong> nec consequat suscipit, erat nulla …');
    });
});

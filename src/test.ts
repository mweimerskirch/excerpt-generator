import {createExcerpt} from "./excerpt-generator";

let singleMatchSearch = "lobortis";
let multipleMatchSearch = "est";
let noMatchSearch = "loremipsum";

let shortInput = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let longInput = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis eros eget est vulputate, nec blandit nunc lacinia. Vestibulum est finibus maximus nisi ultricies efficitur. Duis purus nibh, porta a dictum ut, dapibus non erat. Nunc vehicula metus nec gravida lacinia. Vestibulum faucibus pharetra semper. Morbi lacinia et mauris ac vulputate. Nulla justo ligula, finibus ut dolor eu, aliquam lacinia ante. Pellentesque ultrices eros non gravida pulvinar. Ut hendrerit, est nec consequat suscipit, erat nulla pharetra neque, in luctus tellus justo a dui. Ut feugiat, turpis efficitur pellentesque rutrum, nibh magna tristique arcu, sed tincidunt dui turpis ut urna. Duis commodo nec velit eget fringilla. Proin imperdiet varius consectetur. Vivamus sit amet pharetra velit, vitae aliquet libero. Suspendisse consequat ligula tortor, quis tempus lacus tempus in.";

const output = createExcerpt(longInput, multipleMatchSearch, 5, 200)

console.log(output)
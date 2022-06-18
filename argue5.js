function addNumbers(num1, num2) {
    // console.log(arguments[3]);
    // arguments.push(45); possible na 
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }

    return result;
}
const sum = addNumbers(23, 13, 30, 10);
const sum2 = addNumbers(23, 13, 30, 10, 4);
//arguments diye evabe unlimited pm dewa jabe
console.log(sum);
//argument je array like object ta ei code dekhe bujha jae
function addNumbers(num1, num2) {
    // console.log(arguments[3]);
    // arguments.push(45); possible na 
    for (const num of arguments) {
        console.log(num);
    }
    const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 30, 10);
const sum2 = addNumbers(23, 13, 30, 10, 4);
// 13 er pore aro 2 /3 ta number dileo same 36 e ans e ashbe
//aro 2 ta pm dile hbe 
//but tao future e problem hbe 
console.log(sum);
//argument je array like object ta ei code dekhe bujha jae
//but ekhane push pop possible na
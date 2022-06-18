//slice
const numbers = [3, 4, 5, 6, 7, 8, 9];
// const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);
//eta onk ta string er slice er moto 
//splice to remove an element from an array
// const numberSpliced = numbers.splice(4, 2);
// console.log(numberSliced);
// console.log(numbers);

const numberSpliced2 = numbers.splice(4, 1, "char 1", "char 2"); // 1 er por theke ja ja ache ta ja ja remove hoise tar poriborte boshbe 
// const numberSpliced2 = numbers.splice(4, 0, "char 1", "char 2");
//remove na koreo inject kora jae
console.log(numberSpliced2);
console.log(numbers);
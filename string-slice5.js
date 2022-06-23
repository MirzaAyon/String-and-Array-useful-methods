//concat
const first = 'amader';
const second = 'city';
// const fullString = first + '' + second;
// const fullString = first + ' ' + second;
// console.log(fullString);
//string immuate able mane ki? string immuate able mane pasha pashi jora dite gele ektar sathe arekta pasha pashi boshae dile hbe na, notun arekta string create korte hoe

// const fullString = first.concat(second);
// const fullString = first.concat(second).concat('abc');
// const fullString = first.concat(second).concat('abc').concat('ayon');
// console.log(fullString);


//join()
const words = ['a', 'b', 'c', 'd'];
const allJoined = words.join('');
console.log(allJoined);

const words2 = ['a33', 'ber', 'cef', 'ded'];
const allJoined2 = words2.join('');
console.log(allJoined2);

const words3 = ['a33', 'ber', 'cef', 'ded'];
// const allJoined3 = words3.join(' ');
// const allJoined3 = words3.join(',');
const allJoined3 = words3.join(', ');
console.log(allJoined3);
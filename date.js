const myFavDate = new Date('1971-3-26');
// console.log(myFavDate) ;
const anotherDate = new Date(1971, 3, 26, 11, 50, 20, 80);
console.log(anotherDate);
//year,month,date, 11 ta, 50 minute, 20 second,80 mili second 

if (myFavDate < anotherDate) {
    console.log('fav date is earlier');
}
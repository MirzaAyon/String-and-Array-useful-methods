function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['shammi', 'plabon', 'Trinoy', 'Iffu'];
const myBigBuddy = megaFriend(12345);
//uporer va;idation na dile ekhane error dito
// console.log(myBigBuddy);

if (friends.indexOf('Iffu') != -1) {
    // console.log('Iffu Exists');
    //fox er khetre try korbo and else dibo
    //doesn't dite hole bahire "" dite hbe 
}
// if (friends.includes('Iffu') == true) {
//     console.log('Exists');
// }


//incluses
if (friends.includes('Iffu')) {
    console.log('Exists');
}

//concat/concatation = jora dewa
const first = [1, 23, 4];
const second = [46, 27, 27]
const combined = first.concat(second);
console.log(combined);
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
console.log(myBigBuddy);
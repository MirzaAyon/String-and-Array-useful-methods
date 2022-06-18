function getFullName(firstName, lastName) {
    let fullName = ' ';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('omuk', 'tomuk', 'Hanif', 'enterprice', 'mirza', 'ayon');
console.log(name);
//string khub beshi jora dile performance kome jae ja amra pore shikhbo
//karon string ekta immutable jinish
//onk beshi pm thakle ja naam diye cover kora possible na tokhn pm er poriborte argument dibo
//argument e push,pop,shift,unshift kichue korte parbo na
//kintu loop through korte parbo for of ba regular for loop diye
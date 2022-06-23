function getFullName(firstName, lastName) {
    let fullName = ' ';
    // const fullName = ' ';
    //const e error dibe karon const e reassign possible na
    for (const part of arguments) {
        fullName = fullName + part;
    }
    return fullName;
}
const name1 = getFullName('omuk', 'tomuk', 'Hanif', 'enterprice');
console.log(name1);
//string khub beshi jora dile performance kome jae ja amra pore shikhbo
//karon string ekta immutable jinish
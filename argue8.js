function getFullName(firstName, lastName) {
    const fullName = ' ';
    for (const part of arguments) {
        fullName = fullName + part;
    }
    return fullName;
}
const name = getFullName('omuk', 'tomuk', 'Hanif', 'enterprice');
console.log(name);
//string khub beshi jora dile performance kome jae ja amra pore shikhbo
//karon string ekta immutable jinish
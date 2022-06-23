let json = "{ 'age' : 30}";

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError('Incomplete data : no name');
    }
    console.log(user.name);
}
catch (e) {
    // console.log('JSON ERROR' + e.message);
    // console.log('JSON ERROR' + e);
    console.log('JSON ERROR' + e.name);
}
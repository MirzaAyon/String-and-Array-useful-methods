//try
// try statement lets you test a block of code for errors

//catch
//catch statement lets you handle the errors

//throw
//the throw statement lets you create custom errors

//final 
//the final statement lets you execute code after try and catch regardless of the result

try {
    console.log('Start of try runs');
    uniclycle;
    console.log('end of running because of error');
}
catch (err) {
    // console.log('Error has occured : ' + err.stack);
    console.log('Error has occured : ' + err);
}
finally {
    console.log('This is always run');
}
console.log('This is error through'); //throw
//try
// try statement lets you test a block of code for errors

//catch
//catch statement lets you handle the errors

//throw
//the throw statement lets you create custom errors

//final 
//the final statement lets you execute code after try and catch regardless of the result

try {
    {
        //ei typer kichu dile abr hbe na karon ekhane syntex thik nai, eke bole syntex error  - this is called parse time error
        console.log('Start of try runs');
        uniclycle;
        console.log('end of running because of error');
        //try catch only handle run time error's
    }
catch (err) {
        // console.log('Error has occured : ' + err.stack);
        console.log('Error has occured : ' + err);
    }
    finally {
        console.log('This is always run');
    }
    console.log('This is error through'); //throw
function myFunction(check) {
    let result = check;
    if(check >= 750){
        result = 0.95 * check;
    }
    console.log(parseInt(result));
}
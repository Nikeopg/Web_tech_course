function myFunction(n, s) {
    let total = 0;      
    for(let i = 0; i < n; i++ ) {
        total += s;
    };
    return console.log(total)
}


myFunction(3,100)
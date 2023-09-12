// what is the purpose of the "Let" keyword?

// A: It is used to declare a variable that is limited to the scope of a block statement, or expression on which it is used.

// example:

    let counter = 30;
    if(counter === 30){
        let counter = 31;
        console.log(counter); // 31
    }
    console.log(counter); // 30 (because it is outside the scope of the if statement)
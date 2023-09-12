// what is Temporal Dead Zone?

//  The Temporal Dead Zone is a behavior that occurs with variables declared using let and const keywords. It describes the state where variables are unable to be accessed before the declaration is initialized. This is because the variable is in a state of temporal dead zone before this initialization is processed.

// example:

    console.log(x); // ReferenceError: x is not defined
    let x = 3;
    console.log(x); // 3

    
// What is hosting in JavaScript?

// Hosting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.


// example:

    console.log(x); // undefined
    var x = 3;
    console.log(x); // 3

// example:

    console.log(x); // ReferenceError: x is not defined
    let x = 3;
    console.log(x); // 3


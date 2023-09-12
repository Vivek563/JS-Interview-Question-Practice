// What are closures in JavaScript?

// A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.
// closure has access to three scopes:
// i. Own scope where variable defined betwee its curly braces.
// ii. Outer function scope.
// iii. Global scope.

// let's understand with example:

function Welcome(name){
    let greetingInfo = function(message){
        console.log(message + ' ' + name);
    }
    return greetingInfo;
}

let myFunction = Welcome('Vivek');
myFunction('Welcome '); // Output: Welcome Vivek
myFunction('Hello Mr.'); // Output: Hello Mr.Vivek
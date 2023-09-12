// what is the different between let and var ?

// A: var is scoped to the nearest function block and let is scoped to the nearest enclosing block, which can be smaller than a function block. Both are global if outside any block.

// example:

    var counter = 30;
    if(counter === 30){
        var counter = 31;
        console.log(counter); // 31
    }
    console.log(counter); // 31 (because it is outside the scope of the if statement)



    let counter = 30;
    if(counter === 30){
        let counter = 31;
        console.log(counter); // 31
    }
    console.log(counter); // 30 (because it is outside the scope of the if statement)


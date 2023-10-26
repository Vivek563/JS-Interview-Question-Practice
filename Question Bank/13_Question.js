// What is callback function

// A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an UserActivation. Let's take a simple example of how to use callback function.

// function callbackFunction(name) {
//     console.log('hello ' + name);
// }

        function outerFunction(callback){
            let name = "Juhi";
            callback(name);
        }

        outerFunction(callbackFunction);



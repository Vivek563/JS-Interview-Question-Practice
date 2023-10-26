# 1. What are the possible ways to create objects in JavaScript?

#### 1. Object Literals

```javascript
var object = {};
```

#### 2. Object Constructor

   ```javascript
        var object = new Object();
   ```    
    


#### 3. Object.create() method

```javascript
var object = object.create(null);
```

#### 4. Class (Introduced in ES6)

```javascript
function Person(name) {
  var object = {};
  object.name = name;
  object.age = 21;
  return object;
}

var object = new Person("Vivek Maurya");
```

#### 5. Function Constructor

```javascript
function Person(name) {
  Person.prototype.name = name;
  var object = new Person();
}
```

#### 6. ES6 class

```javascript
class person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Vivek Maurya");
```

#### 7. Singleton Pattern

```javascript
var object = new (function () {
  this.name = "Vivek Maurya";
})();
```

# 2. What is different between Call, Apply and Bind

 call: the call() method invokes a function with a given this value and arguments provided individually.

```javascript
let employee1 = { firstName: "Vivek", lastName: "Maurya" };
var employee2 = { firstName: "Juhi", lastName: "Maurya" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "hello", "how are you?");
invite.call(employee2, "hello", "how are you?");
```

 apply: the apply() method invokes a function with a given this value and arguments provided as an array.

```javascript
var employe1 = { firestName: "Vivek", lastName: "Maurya" };
var employe2 = { firstName: "Juhi", lastName: "Maurya" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employe1, ["hello", "how are you?"]);
invite.apply(employe2, ["hello", "how are you?"]);
```

 bind: the bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript
var employ1 = { firstName: "Vivek", lastName: "Maurya" };
var employ2 = { firstName: "Juhi", lastName: "Maurya" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employ1);
var inviteEmployee2 = invite.bind(employ2);
inviteEmployee1("hello", "how are you?");
inviteEmployee2("hello", "how are you?");
```

# 3. How do you comare Object and Map

 Object are similar to Maps in that both let you set keys to values, retrive those valyes, delete keys, and detect whether something is stored at a key. Because of this (and because there were no built-in alternatives), Objects have been used as Maps historically; however, there are important differences between Objects and Maps that make using a Map better.

 An Object has a prototype, so there are default keys in the map. However, this can be bypassed using map = Object.create(null). The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.

 You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.

 A Map may perform better in scenarios involving frequent addition and removal of key pairs.
 Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.

 Use objects when there is logic that operates on individual elements.

# 4. what are the different between == and === operators

  ==: The equality operator converts the operands if they are not of the same type, then applies strict comparison. If both operands are objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.

  ===: The identity operator returns true if the operands are strictly equal with no type conversion.

```javascript

    0 == false   // true
    0 === false  // false, because they are of a different type
    1 == "1"     // true, automatic type conversion for value only
    1 === "1"    // false, because they are of a different type
    null == undefined // true
    null === undefined // false
    '0' == false // true
    '0' === false // false
    []==[] or []===[] //false, refer to different objects in memory
    {}=={} or {}==={} //false, refer to different objects in memory

```

# 5. what is the purpose of the "Let" keyword?
 A: It is used to declare a variable that is limited to the scope of a block statement, or expression on which it is used.

 example:

```javascript
let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 30 (because it is outside the scope of the if statement)
```

# 6. What is the different between let and var ?
     A: var is scoped to the nearest function block and let is scoped to the nearest enclosing block, which can be smaller than a function block. Both are global if outside any block.

 example:

```javascript
var counter = 30;
if (counter === 30) {
  var counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 31 (because it is outside the scope of the if statement)

let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 30 (because it is outside the scope of the if statement)
```

# 7. What is Temporal Dead Zone?

 The Temporal Dead Zone is a behavior that occurs with variables declared using let and const keywords. It describes the state where variables are unable to be accessed before the declaration is initialized. This is because the variable is in a state of temporal dead zone before this initialization is processed.

  example:

```javascript
console.log(x); // ReferenceError: x is not defined
let x = 3;
console.log(x); // 3
```

# 8. What is IIFE (Immediately Invoked Function Expression)

 An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

 The Signature of an IIFE is:

```javascript
(function () {
  // logic here
})();
```

##### example:

```javascript
(function () {
  console.log("Welcome to the IIFE world!");
})(); // Welcome to the IIFE world!
```

# 9. What is hosting in JavaScript?
 Hosting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

 example:

```javascript
console.log(x); // undefined
var x = 3;
console.log(x); // 3

console.log(x); // ReferenceError: x is not defined
let x = 3;
console.log(x); // 3
```

# 10. What are closures in JavaScript?

     A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

 closure has access to three scopes:

 i. Own scope where variable defined betwee its curly braces.

 ii. Outer function scope.

 iii. Global scope.

 let's understand with example:

```javascript
function Welcome(name) {
  let greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}

let myFunction = Welcome("Vivek");
myFunction("Welcome "); // Output: Welcome Vivek
myFunction("Hello Mr."); // Output: Hello Mr.Vivek
```

# 11. what are the diffrences between cookies, sessions and local storage?

## Cookies:

- Cookies are used to store information on a client’s computer.
- Cookies are plain text data record of 5 variable-length fields −
  - Expires − The date the cookie will expire. If this is blank, the cookie will expire when the visitor quits the browser.
  - b. Domain − The domain name of your site.
  - c. Path − The path to the directory or web page that set the cookie. This may be blank if you want to retrieve the cookie from any directory or page.
  - d. Secure − If this field contains the word "secure", then the cookie may only be retrieved with a secure server. If this field is blank, no such restriction exists.
  - e. Name=Value − Cookies are set and retrieved in the form of key-value pairs.
- Cookies are used to remember information about the user profile(such as username).

## Sessions:

- Sessions are used to store information on a server.
- Sessions are stored on server side.
- Sessions are used to remember information about the user profile(such as username).

## Local Storage:

- Local Storage is used to store information on a client’s computer.
- Local Storage is stored on client side.
- Local Storage is used to remember information about the user profile(such as username).
- Local Storage is not sent with every request, so it doesn’t worsen performance (especially for mobile data connections).

# 12. What is Promise
   A promise is an object that may produce a single value some time in the future with either a resolve value or a reason that is not resolve(for example, network error). It will be in one of the 3 possible state:
            1. Fulfilled
            2. Rejected
            3. Pending
    The syntax of promise creation look like below,

```javascript

            const promise = new Promise(function(resolve, reject){
            // promise description
            })

```
example:

```javascript

            const promise = new Promise((resolve) => {

                    setTimeout(() => {
                    resolve("i am Promise!");
                    }, 5000);
            }, reject => {

            });
            promise.then(value => console.log(value))

```

# 13 what is call back function

   A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an UserActivation. Let's take a simple example of how to use callback function.

```javascript
        
        function callbackFunction(name) {
          console.log("hello " + name);
        }
        
        function outerFunction(callback) {
          let name = "Juhi";
          callback(name);
        }
        
        outerFunction(callbackFunction);

```

# 14. Why do we need callbacks?

   The callbacks are needed because javascript is an event driven language. Thiat means instead of waiting for a response javascript will keep executing while listening for other EventSource. Let's take an exapmle with the furse fuction invoking an API call ( simulated by setTimeout) and the next function which log the message.

```javascript

        function firstfunction(){
            //simulated a code delay
            setTimeout(function(){
                console.log("first function called");
            }, 1000);
        }

        function secondfuction() {
            console.log("second function called");
        }

        firstfunction();
        secondfuction();

```


# 15 What is callback hell

   Callback hell is an anti-pattern with multiple nested callbacks with makes code hard to read debug when dealing with asynchronous logic. The callback hell looks like below,

```javascript

    async (function(){
        async (function(){
            async (function(){
                async (function(){
                    async (function(){
                        async (function(){
                            async (function(){
                                    ...................
                            });
                        });
                    });
                });
            });
        });
    });

```

# 16 What is callback in callback

   You can nest one callback inside in another callback to execute the actions sequentially one by one. this is know ad callbacks in callbacks.

```javascript

            loadScript("/script1.js", () => {
            console.log("first script is loaded");
            loadScript("/script2.js", () => {
            console.log("second script is loaded");
            
                    loadScript("/script3.js", () => {
                    console.log("third script is loaded");
            
                    loadScript("/script4.js", () => {
                        console.log("fourth script is loaded");
                    });
                    });
                });
                });

```

# 17  What is Promise Chaining 

  The process of excuting a sequence of asynchronous tasks one after another using promise is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,

```javascript

         new Promise(function(resolve, reject){
                setTimeout(() => resolve(1), 1000);
            }).then(function(result){
                console.log(result);
                return result*2;
            }).then(function(result){
                console.log(result);
                return result*3;
        
            }).then(function(result){
                console.log(result);
                return result*4;
            });

```

# 19.  What is promise.all 

   Promise.all is a promse that takes an array of promises as an input (an iterable), and it gets resolved when all the promise get resilved or any one of then get rejected. 
    
```javascript
        Promise.all([Promise1, Promise2, Promise3]). then(result) => {
                console.log(result);
            }
```
    
###  Note: Remember that the order of the promses (output the result) is maintained as per input order. 


 # 19. What is the purpose of the delete operator

The delete keyword is used to delete the property as well as its value.

```javascript
var user = { name: "Vivek", age: 20 };
delete user.age;

console.log(user);

```

# 20. What is the typeof Operator 

 You ca use the javascript typeof operator to find the type of a javascript variable. It return the type fo a variable or an expression 

```javascript
console.log(typeof "Vivek Maurya");  // return "string"

console.log(typeof (1+2));  //return "number"
```

# 21.  What is eval

 The eval() function evalutes javascript code represented a String. The String can be a Javascript expression, variable, statement, or sequence of statement.

```javascript
console.log(eval("1 + 2")); //3
```
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
    function Person(name){
        var object = {};
        object.name = name;
        object.age = 21;
        return object;

    }

    var object = new Person("Vivek Maurya");
   ``` 


#### 5. Function Constructor

```javascript
    function Person(name){
        Person.prototype.name = name;
        var object = new Person();
    }
``` 
   


#### 6. ES6 class

```javascript
    class person{
        constructor(name){
            this.name = name;
        }
    }

     var object = new Person("Vivek Maurya");
   ``` 

#### 7. Singleton Pattern

```javascript
    var object = new function(){
        this.name = "Vivek Maurya"
    }
``` 


# 2. What is different between Call, Apply and Bind

####  call: the call() method invokes a function with a given this value and arguments provided individually.

```javascript
   
    let employee1 = {firstName: "Vivek", lastName: "Maurya"};
    var employee2 = {firstName: "Juhi", lastName: "Maurya"};

    function invite(greeting1, greeting2){
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);

    }

    invite.call(employee1, 'hello', 'how are you?');
    invite.call(employee2, 'hello', 'how are you?');
   ``` 

####  apply: the apply() method invokes a function with a given this value and arguments provided as an array.

```javascript
   
    var employe1 = {firestName: 'Vivek', lastName: 'Maurya'};
    var employe2 = {firstName: 'Juhi', lastName: 'Maurya'};

    function invite(greeting1, greeting2){
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);

    }

    invite.apply(employe1, ['hello', 'how are you?']);
    invite.apply(employe2, ['hello', 'how are you?']);
   ``` 

####  bind: the bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript
   
    var employ1 = {firstName:"Vivek", lastName:"Maurya" }
    var employ2 = {firstName:"Juhi", lastName:"Maurya" }

    function invite(greeting1, greeting2){
        console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
    }

    var inviteEmployee1 = invite.bind(employ1);
    var inviteEmployee2 = invite.bind(employ2);
    inviteEmployee1('hello', 'how are you?');
    inviteEmployee2('hello', 'how are you?');

   ``` 

 # 3. How do you comare Object and Map

#### Object are similar to Maps in that both let you set keys to values, retrive those valyes, delete keys, and detect whether something is stored at a key. Because of this (and because there were no built-in alternatives), Objects have been used as Maps historically; however, there are important differences between Objects and Maps that make using a Map better. 

#### An Object has a prototype, so there are default keys in the map. However, this can be bypassed using map = Object.create(null). The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.

#### You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.

#### A Map may perform better in scenarios involving frequent addition and removal of key pairs.

### Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.

### Use objects when there is logic that operates on individual elements.

# 4. what are the different between == and === operators

#### ==: The equality operator converts the operands if they are not of the same type, then applies strict comparison. If both operands are objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.

#### ===: The identity operator returns true if the operands are strictly equal with no type conversion.

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

# 5.// what is the purpose of the "Let" keyword?

#### A: It is used to declare a variable that is limited to the scope of a block statement, or expression on which it is used.

##### example:

```javascript
    let counter = 30;
    if(counter === 30){
        let counter = 31;
        console.log(counter); // 31
    }
    console.log(counter); // 30 (because it is outside the scope of the if statement)
   
   ``` 

# 6. What is the different between let and var ?

#### A: var is scoped to the nearest function block and let is scoped to the nearest enclosing block, which can be smaller than a function block. Both are global if outside any block.

##### example:

```javascript
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
```

# 7. What is Temporal Dead Zone?

####  The Temporal Dead Zone is a behavior that occurs with variables declared using let and const keywords. It describes the state where variables are unable to be accessed before the declaration is initialized. This is because the variable is in a state of temporal dead zone before this initialization is processed.

##### example:

```javascript
    console.log(x); // ReferenceError: x is not defined
    let x = 3;
    console.log(x); // 3
   ``` 

    
# 8. What is IIFE (Immediately Invoked Function Expression)

#### An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

   #### The Signature of an IIFE is:
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

#### Hosting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

##### example:

```javascript
    console.log(x); // undefined
    var x = 3;
    console.log(x); // 3



    console.log(x); // ReferenceError: x is not defined
    let x = 3;
    console.log(x); // 3

```

# 10. What are closures in JavaScript?

#### A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.
#### closure has access to three scopes:
##### i. Own scope where variable defined betwee its curly braces.
##### ii. Outer function scope.
##### iii. Global scope.

##### let's understand with example:

```javascript
    function Welcome(name){
        let greetingInfo = function(message){
            console.log(message + ' ' + name);
        }
        return greetingInfo;
    }

    let myFunction = Welcome('Vivek');
    myFunction('Welcome '); // Output: Welcome Vivek
    myFunction('Hello Mr.'); // Output: Hello Mr.Vivek

```

# what are the diffrences between cookies, sessions and local storage?

## Cookies:
* Cookies are used to store information on a client’s computer.
* Cookies are plain text data record of 5 variable-length fields −
  * Expires − The date the cookie will expire. If this is blank, the cookie will expire when the visitor quits the browser.
  * b. Domain − The domain name of your site.
  * c. Path − The path to the directory or web page that set the cookie. This may be blank if you want to retrieve the cookie from any directory or page.
  * d. Secure − If this field contains the word "secure", then the cookie may only be retrieved with a secure server. If this field is blank, no such restriction exists.
   * e. Name=Value − Cookies are set and retrieved in the form of key-value pairs.
* Cookies are used to remember information about the user profile(such as username).


## Sessions:
* Sessions are used to store information on a server.
* Sessions are stored on server side.
* Sessions are used to remember information about the user profile(such as username).


## Local Storage:
* Local Storage is used to store information on a client’s computer.
* Local Storage is stored on client side.
* Local Storage is used to remember information about the user profile(such as username).
* Local Storage is not sent with every request, so it doesn’t worsen performance (especially for mobile data connections).




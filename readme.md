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


# What is different between Call, Apply and Bind

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

 # How do you comare Object and Map

#### Object are similar to Maps in that both let you set keys to values, retrive those valyes, delete keys, and detect whether something is stored at a key. Because of this (and because there were no built-in alternatives), Objects have been used as Maps historically; however, there are important differences between Objects and Maps that make using a Map better. 
#### An Object has a prototype, so there are default keys in the map. However, this can be bypassed using map = Object.create(null). The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.

#### You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.

#### An Object has a hasOwnProperty() method, so there are default keys in the map. However, this can be bypassed using map = Object.create(null). The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.

#### You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.

#### A Map may perform better in scenarios involving frequent addition and removal of key pairs.

### Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.

### Use objects when there is logic that operates on individual elements.

    
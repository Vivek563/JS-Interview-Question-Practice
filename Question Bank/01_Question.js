// What are the possible ways to create objects in JavaScript?


// 1. Object Literals

     var object = {};


// 2. Object Constructor

        var object = new Object();


// 3. Object.create() method

    var object = object.create(null);

// 4. Class (Introduced in ES6)

    function Person(name){
        var object = {};
        object.name = name;
        object.age = 21;
        return object;

    }
    var object = new Person("Vivek Maurya");

// 5. Function Constructor

    function Person(name){
        Person.prototype.name = name;
        var object = new Person();
    }


// 6. ES6 class

    class person{
        constructor(name){
            this.name = name;
        }
    }

     var object = new Person("Vivek Maurya");

// 7. Singleton Pattern

    var object = new function(){
        this.name = "Vivek Maurya"
    }
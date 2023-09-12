// What is different between Call, Apply and Bind

//  call: the call() method invokes a function with a given this value and arguments provided individually.


    let employee1 = {firstName: "Vivek", lastName: "Maurya"};
    var employee2 = {firstName: "Juhi", lastName: "Maurya"};

    function invite(greeting1, greeting2){
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);

    }

    invite.call(employee1, 'hello', 'how are you?');
    invite.call(employee2, 'hello', 'how are you?');

//  apply: the apply() method invokes a function with a given this value and arguments provided as an array.

    var employe1 = {firestName: 'Vivek', lastName: 'Maurya'};
    var employe2 = {firstName: 'Juhi', lastName: 'Maurya'};

    function invite(greeting1, greeting2){
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);

    }

    invite.apply(employe1, ['hello', 'how are you?']);
    invite.apply(employe2, ['hello', 'how are you?']);

//  bind: the bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

    var employ1 = {firstName:"Vivek", lastName:"Maurya" }
    var employ2 = {firstName:"Juhi", lastName:"Maurya" }

    function invite(greeting1, greeting2){
        console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
    }

    var inviteEmployee1 = invite.bind(employ1);
    var inviteEmployee2 = invite.bind(employ2);
    inviteEmployee1('hello', 'how are you?');
    inviteEmployee2('hello', 'how are you?');

 
//  What is Promise Chaining 

//  The process of excuting a sequence of asynchronous tasks one after another using promise is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,

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
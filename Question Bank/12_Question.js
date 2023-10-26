// 12. What is Promise

//     A promise is an object that may produce a single value some time in the future with either a resolve value or a reason that is not resolve(for example, network error). It will be in one of the 3 possible state:
//             1. Fulfilled
//             2. Rejected
//             3. Pending
//     The syntax of promise creation look like below,

//             
//             const promise = new Promise(function(resolve, reject){
//             // promise description
//             })
//            


const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("i am Promise!");
    }, 5000);
  },
  (reject) => {}
);
promise.then((value) => console.log(value));

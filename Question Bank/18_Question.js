//  What is promise.all 

    // Promise.all is a promse that takes an array of promises as an input (an iterable), and it gets resolved when all the promise get resilved or any one of then get rejected. 

    Promise.all([Promise1, Promise2, Promise3]). then(result) => {
        console.log(result);
    }

    // Note: Remember that the order of the promses (output the result) is maintained as per input order. 
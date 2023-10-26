// What is callback in callback

// You can nest one callback inside in another callback to execute the actions sequentially one by one. this is know ad callbacks in callbacks.

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

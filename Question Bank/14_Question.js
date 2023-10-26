// Why do we need callbacks

    // the callbacks are needed because javascript is an event driven language. Thiat means instead of waiting for a response javascript will keep executing while listening for other EventSource. Let's take an exapmle with the furse fuction invoking an API call ( simulated by setTimeout) and the next function which log the message.

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
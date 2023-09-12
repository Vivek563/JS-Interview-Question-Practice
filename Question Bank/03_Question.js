// How do you comare Object and Map

    // object are similar to Maps in that both let you set keys to values, retrive those valyes, delete keys, and detect whether something is stored at a key. Because of this (and because there were no built-in alternatives), Objects have been used as Maps historically; however, there are important differences between Objects and Maps that make using a Map better.

    // An Object has a prototype, so there are default keys in the map. However, this can be bypassed using map = Object.create(null). The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.

    // You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.

    // An Object has a hasOwnProperty() method, so there are default keys in the map. However, this can be bypassed using map = Object.create(null). The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.

    // You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.

    // A Map may perform better in scenarios involving frequent addition and removal of key pairs.

    // Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.

    // Use objects when there is logic that operates on individual elements.

    
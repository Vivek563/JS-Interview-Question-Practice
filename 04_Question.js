

    // what are the different between == and === operators

//   ==: The equality operator converts the operands if they are not of the same type, then applies      strict comparison. If both operands are objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.

//   ===: The identity operator returns true if the operands are strictly equal with no type conversion.

    0 == false   // true
    0 === false  // false, because they are of a different type
    1 == "1"     // true, automatic type conversion for value only
    1 === "1"    // false, because they are of a different type
    null == undefined // true
    null === undefined // false
    '0' == false // true
    '0' === false // false
//  []==[] or []===[] //false, refer to different objects in memory
//  {}=={} or {}==={} //false, refer to different objects in memory
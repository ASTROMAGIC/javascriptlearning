// remember basic comparison operations from math 

// greater/less than a>b, a<b

// greater/less than or equals: a >=b, a <=b

// equals a==b. note that double equals means the equality test, while a single equals a = b means an assignment. 

// not equals in javascript is written as   a !=b 

// all comparison operators return a boolean value, as you learned in your previous lesson about the 8 data types. 

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

// when comparing values of different types, javascipt converts the values to numbers. For example:

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.

alert( true == 1 ); // true
alert( false == 0 ); // true

// it is possible that at the same time: two values are equal, one of them is true as a boolean and the other one is false as a boolean. 

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

// by virtue of the comparison operation changing the string value of 0 to the number zero, that makes this comparison return as true. 

// On strict equality: A regular equality check == has a problem. It cannot differentiate 0 from false. 

alert( 0 == false ); // true

// it will also do this for an empty string 

alert( '' == false ); // true

// this happens beause operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes 0. 

// to differentiate - from false, A strict equality operator === checks the equality without type conversion. 

// in other words, if a and b are of different types, then a === b returns false without an attempt to convert them. 

alert( 0 === false ); // false, because the types are different

// There is also a “strict non-equality” operator !== analogous to !=.

// The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.
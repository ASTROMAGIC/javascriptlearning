// the spread (...) syntax allows an iterable, such as an array or a string, to be expanded in places where zero or more arguments (for function calls) or elemtsn (for array literals) are expected. In an object literal, the spread syntax enumerates the prperties of an object and adds the key-value pairs to the object being created. 

// note that spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condeneses" them into a single element. 

// read on rest parameters and rest property. 

// spread syntax example 

function sum (x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3]; 

console.log(sum(...numbers)); 

// expected output: 6 

console.log(sum.apply(null, numbers));

// expected output: 6 


// some extra exercises in manipulating strings 

// it is good practice to choose one style and use consistently in your code. 

// strings decalred using backticks are a special kind of string called a template literal. In most ways, template literals are like normal strings, but they ave some special properties

// 1. you can embed javascript in them 
// 2. you can  decalre template literals over multiple lines

// this is an example of embedding javascript 

const name = "Jason";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

// you can use the smae technique to join together two variables: 

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

// this is something you've seen before, this is string concatenation
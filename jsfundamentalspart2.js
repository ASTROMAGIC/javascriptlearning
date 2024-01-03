// what are the 8 data types in javscript
// difference between single, double, and backtick quotes 
// embed a variable/expression in a string and why/how this can be used 
// understand what a method is 
// name 3 logical operators 
// understand the comparison operators 
// understand what conditionals are 
// under stand what nesting is 
// understand what truth and falsy values are 

const string = "The Revolution will not be televised."
console.log(string);

// we're setting up a basic constant containing a string here. 
// if i were to remove the quotes from one side or have no quotes, this const variable would give us an error. 

// you can store a previously made string within a newly made variable like so 

const badString = string; 
console.log(badString);

// badString now has the same value as string. 

// as far as quotes go in javascript, all will work. single quotes ('), double quotes (""), or backticks (`) can all wrap strings. 

const single ='Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// you cannot mix single quotes and double quotes to wrap a string. Only one type of wrapping is allowed or you will get an error. 

// you can also embed variables or expressions inside ${} and the result will be included in a string. 

const title = "Jason";
const greeting = `Hello, ${title}`;
console.log(greeting);

// i'll leave off here. pick up tomorrow at embedding javascript 
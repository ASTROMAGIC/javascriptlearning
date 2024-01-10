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


// continuation - january 7th 

// the first data type in javascript is a number. here is an example 

let message = "hello";
message = 12356; 

// the variable message can exist as a string or a number. here is another example 

let n = 123; 
n = 12.345; 

// the number type represents both integrer and floating point numbers. There are many operations numbers, e.g. multiplcation *, division /, addition +, subtraction -, and so on. 

// beside regular numbers, there are "special numeric values" which also belong tot his data type: infitnity, -infinity, and NaN (not a number)

alert(1/0); // gives infinity 
alert(Infinity); // references infinity directly

// NaN represents a computional error. it is a result of an incorrect or an undefinited mathematic operation. For example: 

alert("not a number" / 2); // Nan, such division is erroneous. 

// Remember that NaN is ticky. Any further mathematical operation on NaN returns NaN. 

alert(NaN + 1); // returns NaN
alert(3 * NaN); // returns NaN
alert ("not a number" / 2-1); //returns NaN

// in essence, if there's a NaN somewhere in a mathematical expression, it propagates to the whole result. The only exception being that NaN ** 0 is 1. 

// is js, the "number" type cannot safely represent integer values larger than (2^53-1) or (-2^53-1) for negatives. Going beyond these limits will result in a precision error, because not all digits fit into the fixed 64-bit stoage. 

// BigInt type was added to the js language to represent integers of arbitrary length. 

// A BigInt value is created by appending n to the end of an integer: 

const bigInt = 123456789876543213456798n; 

// BigInt numbers are rarely needed, so look deeper into these when a project or work you will create will have a need for it. 

// the next data type is a string, surround by the different types of quotes you went over earlier in this exercise. 

// the next data type is a Boolean (the logical type.)

//Boolean type only has two values: true and false. This type is commonly used to store yes/no values: true means "yes/correct", and false means "no/incorrect".

let nameFieldCheck = true; // yes, name field is checked 
let ageFieldChecked = false; //no, age field is not checked 

// Boolean values can also come as a result of comparisons

let isGreater = 4 > 1; 
alert( isGreater ); // true (the comparison result is "yes")

// the next data type is the "null" value 

// the special null value does not belong to any of the types descibed above. 

// it forms a seperate type  of its own which contains only the null value:

let age = null; // in js, null is not a "reference to a non-existing object" or a "null pointer" like in some other languages. 

// it is simply a special value which represents "nothing", "empty", or "value unknown"

// the code above indicates that the variable age is unknown. 

// the next data type in js is the undefined value 

// the meaning of undefined is "value not assigned"

//if a variable is decaled, but not assigned, then its value is undefined

let myAge;

alert(myAge); // will show "undefined"

// you can also explicityly assign undefined to a variable 

let oldAge = 100; 
// change the value to undefined 
oldAge = undefined; 
alert(oldAge); // should showed as undefined 

// this is not recommended. normally, one uses null to assign an "empty" or "unknown" value to a variable, while undefined is reserved as a default initial value for unassigned things. 

// the object type is special. 

// all other types are considered "primitive" because their values can contain only a single thing (be it a string or a number, etc.) 

// objects are used to store collections of data and more complex entities. 

// there is a chapter dedicated objects that will be read at a later time 

// the symbol type is used to create unique identifies for objects. Symbols are used as specific identifiers for objects. Symbols will be learned at a later date. 

// the typeof operation retunrs the type of operand. it's useful when you want to process values of different types differently or just want to do a quick check. 

// a call to typeof x returns a string with the type name: 

typeof undefined // returns undefined 
typeof 0 // returns number 
typeof 10n // returns bigint 
typeof true // returns boolean 
typeof Symbol("id") // returns symbol 
typeof Math // returns "object"
typeof null // returns "object"
typeof alert // returns "function"

// Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.

// The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.

// The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.

// in summary there are 8 basic data types in JS
// 1. number 2. bigint 3. string 4. boolean (true/false, yes/no) 5. null 6. undefined 7. symbol 8. object 

// the typeof operator allows us to see which type is stored in a variable. (usually used as typeof x, but typeof(x) is also possible). it returns a string with the name of the type, like "string".

// for null returns "object" -this is an error in the language, it's not actually an object. 
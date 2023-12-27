console.log("Hello world!")

// a variable is a "named storage" for data. an easy way to do this in javascript is to use let 

let message 

message = 'Hello'; // this stores the string 'Hello' in the variable named message 

alert(message); // alert shows the variable content 

// to be concise, combine the variable declaration and assignment into a single line like so

// let message = 'Hello!';

// you can also declare multiple variables in one line 

let user = 'John', age = 25, letter = 'Hello there';

// for the sake of readability, use a single line per variable. 

let theUser = 'Jason'
let yearsOnEarth = 25; 
let theMessage = 'Why Hello!'

// there are muliple ways of writing these variables out with commas, but you can come back to them at your leisure. 

// in older scipts, you may find var being used instead of let 

var aMessege = 'Hello';

// var is similar to let. it decalres a variable in a slightly different more oldschool way. 

// an easy way to think about variables is to imagine a box for data, with a unique sticker attached to it. 

// for instance, the variable message can be imagined as a box imagined as a box labeled "message" with the value "hello" inside of it. 

// if you have declared a variable already, you can change it by changing it's value. You have already declared "message" and it contains the string "Hello!"

message = 'World!'; 

alert(message); // these two lines of code have changed the value of message to 'World!'

// you can declare two variables and copy data from one into the other 

let hello = 'Hello world!';

// the next line of code copies 'Hello world' from hello into message 

message = hello; 
// now two variables hold the same data 
alert(hello);
alert(message);

// remember, a variable should only be declared once. A repeated declaration of the same variable is an error 

// examples of valid names in javascript 

let userName; 
let test123; 

// if a variable name contains multiple words, use camelCase.

// you can also use $ and _ as variable names. they have no special meaning here.

// you cannot start variable names with digits and you cannot use hyphens 

// you cannot use reserved words for variables. examples are let, class, return, and function. refer to the list of reserved words if you forget some 

// to declare a constant (unchanging) variable, use const instead of let

const myBirthday = '10.04.1995'

// attempting to reassign constants will result in an error

// when a programmer knows a variable will never change, they can declare it with consta to gaurantee and clearly communicate that fact to their team 

// constants are useful for aliases that contain values that are hard to remember but are known prior to execution.

// these constants are named using capital letters and underscores. 

// an example would be the use of constants to remember colors in hexadecimal format

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00


// here, we can see multiple benefits: COLOR_ORANGE is much easier to remember than "#FF7F00". It is also easier to mistype "#FF7F00". COLOR_ORANGE is also more meaning ful than "#FF7F00" when reading the code. 

// if you do not know the value for a constant prior to execution, you can name them normally. example being: 

const pageLoadTime = 24341234 /* time taken by webpage to load, arbitrary number written as a place holder */;

// use capital named constats for aliases for "hard-coded" values, like a birthday.

// come back to this javascript file and complete the exercises. see if you can get them right the first time after doing this tutorial again. 
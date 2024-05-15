// arrays are useful for holding many values under a single name, and you can access the values by referring to an index 

// the easiest way to create an array is to use const //

const cars = ["Supra", "M4", "GT4RS"];

// spaces and breaks are not important can span multiple lines 
// you can also declare an array and then provide the elements 

const food = [];
food[0] = "In n Out";
food[1] = "Ceasar Salad";
food[2] = "Ramen"; 

// Note that the first element in an array starts from the number 0 

// You access array elements by referring to the proper index number

// You can change an array element by calling the element and reassigning it to a new element, like so 

cars[1] = "2018 M240i";

// the javascript method toString() converts any array to a string of comma seperated array values 

const fruits = ["Pears", "Apples", "Tangerines", "Blueberries"];
document.getElementById("demo").innerHTML= fruits.toString();

// to access the full array, refer to the array by name like this 

document.getElementById("demo").innerHTML = cars;

// Remember, arrays are special types of objects. The typeof operator in javascript returns object for arrays

// arrays use numbers to access its "elements"

// Objects use names to access its "members". In this example, person.firstName returns John 

const person = {firstName:"John", lastName:"Doe", age:46};

// javascript variables can be objects. arrays are special kinds of objects. Due to this, you can have variables of different types in the same Array. 

// You can have objects, functions, or even other arrays inside of arrays 

myArray[0] = Date.now;
myArray[1] = myFunction; 
myArray[2] = Car; 

// the true strength of javascript arrays are the built in array properties and methods

cars.length // returns the number of elements 
cars.sort // sorts the array 


// the length property of an array returns the length of an array (the number of array elements)

// IMPORTANT NOTE: the length rpopeerty is always one more the highest array index.

// how to access the first array element 

let fruit = fruits[0]; 

// how to access the last array element 

let fruitloop = fruits[fruits.length -1];

// a way you can loop through an array is using a for loop 

// the easiest way to add a new element to an array is using the push() method 

fruits.push("Lemon"); // adds a new element (lemon) to fruits 

// you can add a new element to an array using the length property 

fruits[fruits.length] = "Raspberry"; // adds "Raspberry to fruits"

// IMPORTANT NOTE: adding elements with high indexes can create undefined "holes" in an array 

// fruits [6] = "Guava"; because there are no elements "4 or 5", this creates holes in the array 

// arrays with named indexes are called associative arrays (or hashes)

// javascript does not support arrays with named indexes. Javascript arrays ALWAYS use numbered indexes. 

// if you try to use named indexes, javascript will redefine the array to an object

const homies = [];
homies["firstName"] = "Jimmy";
homies["lastName"] = "Kingston";
homies["age"] = 46;

homies[0]; // will return undefined

homies.length // will return 0 

// note that assigning named indexes does not produce an error, it simply doesn't recognize what I'm creating in the context of a javascript array. 

// the difference between arrays and objects are thus: arrays use numbered indexes. objects use named indexes. 

// when to use arrays or objects 

// you should use objects when you want the element names to be strings (text)

// you should use arrays when you want the element names to be numbers 


// javascript has a built- in array constructor newArray()

const allPoints = new Array();

// or 

const newPoints = [];

const flameo = new Array(10, 20, 30, 40, 50, 60); 

const hotMan = [1, 2, 3, 4, 5 ,6]; 

// both of these create arrays with 6 numbers

// the new keyword can at times produce unexpected results 

const myMother = [20];

// the creates an array with one element 

const katara = new Array(20);

// this creates an array with 20 UNDEFINED elements. oof, watch out bro 


// how do you recognize arrays when you see them?

// solution 1: Array.isArray();

Array.isArray(fruits);

// solution 2: instaceof operator returns true if an object is created by a given constructor 

// nested arrays are arrays within arrays 

const sasuke = [["Chidori", "Gokakyuu"] , ["16" , "31"] ];

// it is important to know how to use nested arrays and also how to access the elements inside of these arrays

console.log(sasuke[0][1])

// this method i just used here will allow me to access the first array and the second element within that array

// foreach and map are array methods you will use a lot, keep this in mind 



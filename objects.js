// objects are very important in the arena of programming concerning javascript. every truly important project that you will ever make will likely contain objects from this point forward 

// objects are key-value pairs, and they are usually used alongside array methods that you will get accustomed to seeing over time. objects are used to store keyed collections of various data and more complex entities. 

// objects are made with figure brackets {} with an optional list of properties. A propert is a "key:value" pair, where key is a string (also called a property name) and value can be anything.

// imagine an object as a cabinet with signed files. every piece of data is tored in its file by the key. this way it is easy to find a file by its name or add/remove a file. 

// empty objects can be created using one of two syntaxes: 

let user = new Object(); // this is the "object constructor" syntax

let newUser = {}; // this is the "object literal" syntax 

// Literals and Properties: we can immediate put some properties into {...} as "key:value" pairs. 

let firstUser = { // an object
    name: "John", // by key "name" store value "John"
    age: 30 // by key "age" store value 30 
};

// this is a good intro to the very basics of objects, now let's learn some intermediate/advanced uses of arrays 

// take for example the sumOfTripledEvens functions which will: 

// take in an array, for every even number, it will triple it. then it will sum all of those even numbers. 

// think of this in pseudocode: We need to perform an operation only on the even numbers. We then need to transform those numbers by multipling them by 3. Finally, we need to add the result up from the previous transformation. 

function sumOfTripledEvens(array) {
    let sum = 0; 
    for (let i = 0; i < array.length; i++) {
        // use a for loop to loop through the entire array you will input
        if (array[i] % 2 === 0) {
            const tripleEvenNumber = array[i] * 3;
            // use an if conditional to detect if the array item is divisible by 2 (which tells you it is even) store that array item in a constant variable that triples the value of that array item
            sum += tripleEvenNumber;

        }
    }
    return sum; 
// return the sum of all of the integers stored in the new variable you created in your function at the start
}

// this function can be made more concise with array methods, one such method being map 

// take the function addOne, which adds the value of one to each item in the array you present. 

function addOne (num) {
    return num + 1;
}

const arr = [1, 2, 3, 4, 5];

const mappedArr = arr.map(addOne);
console.log(mappedArr);

// instead of using a for loop and iterating over each item in the area, the map array method automatically iterates over the array for us. No extra work is needed besides simply passing the function we want to use in. 

// remember, map returns a new array and does not change the original array. 

// for even more simplicity, you can write an arrow function

const simpleArr = [1, 2, 3, 4, 5];

const mappedSimpleArr = simpleArr.map((num) => num + 1);
console.log(mappedSimpleArr); // outputs [2,3,4,5,6]


// the second advanced array method we will learn about is called filter. filter is somewhat similar to map. it still iterates through the array and apples the callback function on every item. However, instead of transforming the values in the array, it returns the original values of the array, but only if the callback function returns true. 


// say for example we had a function, isOdd that returns either true if number is odd or false if it isn't. 

function isOdd(num) {
    return num % 2 !== 0;
}


const oddArr = [1,2,3,4,5];
const oddNums = oddArr.filter(isOdd);
console.log(oddNums); // outputs [1, 3, 5]
console.log(arr); // outputs [1,2,3,4,5] original array not changed 

// filter will iterate thorught the array passed and pass every value into the isOdd callback function, one at a time 

// isOdd will return true when the value is odd, which means the value is included in the output. 

// if it's an even number, isODd will return false and not include it in the final output 



// The Reduce Method 

// let's say that we wanted to multiply all of the numbers in our arr together like this: 1*2*3*4*5. First we'd have to decalre a variable total and initialize it to 1. Then, we'd iterate through the array with a for loop and multiply the total by the current number.

// so we actually do not need to do all of this. There is th reduce method that will do the job for us. Just like map and filter, it expects a callback function. 

// There are two key differences with this array method:

// the callback function takes two arguments instead of one. The first argument is the accumulator, which is the current value of the result at that point in the loop. The first time through, this value will either be set to the iniitialValue or the first element in the array if no initialValue is provided. The second argument for the callback function is the current value, which is the item currently being iterated on. 

// it also takes in an initialValue as a second argument (after the callback), which helps when we don't want our initial value to be the first elemkent in the array. For instance, if we wanted to sum all numbers in an array, we could call reduce without an initiaValue, but if we wanted to sum all number s in an array and add 10, we could use 10 as our initialValue. 

const reducedArr = [1,2,3,4,5];
const productofAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);

console.log(productofAllNums); // outputs 120
console.log(reducedArr); // outputs 1,2,3,4,5


// in the above function we: Pass in a callback function, which is (total, currentItem) => total * currentItem

// then we initialize total to 1 in the second argument

// in essence, what .reduce() does is it will once again go through every element in arr and apply the callback function to it, then it changes total without actually changing the array itself. After it's done, it returns total. 




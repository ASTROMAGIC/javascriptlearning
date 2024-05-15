// today we're working with loops, loops are useful for completing repetitive tasks from basic calculations to any situation where you've got a lot of similar items to work with 

// loops are useful for doing the same thing over and over again. keep this in mind when deciding when to use on 

// for example, say you want to draw 100 random shapes on a <canvas> element


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = "rgb(255 0 0 / 50%)";
      ctx.arc(
        random(canvas.width),
        random(canvas.height),
        random(50),
        0,
        2 * Math.PI,
      );
      ctx.fill();
    }
  }

// I've looked through some example code that a loop would be used in and somewhat understand in concept 

// You can also loop through a collection of items and do things with every item.

// one type of collection is an array. Other collections are Set and Map. 

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Lion", "Panther"];

for (const cat of cats) {
    console.log(cat);
}

// in this example (const cat of cats) says: 1. Given the collection cats, get the first item in the collection. 2. Assign it to the variable cat and the run the code between the curly braces {}. 3. get the next item, and repeat (2) until you've reached the end of the collection. 


// there are more specialized loops for collections, for example the next two 


// you can use map() to do something to each item in collection and create a new collection containing the changed items

// I understand this as possibly remapping the order of an array and creating a new array with the same items in a different order 

function toUpper(string) {
    return string.toUpperCase();
  }
  
  const felines = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
  const upperCats = felines.map(toUpper);
  
  console.log(upperCats);
  // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]


// we pass a function into cats.map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array. In this case the function we provide converts the item to uppercase, so the resulting array contains all our cats in uppercase

// use filter() to test each item in a collection, and create a new collection containing only items that match 

function lCat(cat) {
    return cat.startsWith("L");
  }
  
  const paws = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
  const filtered = paws.filter(lCat);
  
  console.log(filtered);

  // [ "Leopard", "Lion"]

// This looks a lot like map(), except the function we pass in returns a boolean: if it returns true, then the item is included in the new array. Our function tests that the item starts with the letter "L", so the result is an array containing only cats whose names start with "L"

// note that map() and filter() are both often used with function expressions. using these expressions we could rewrite the example to be far more compact. 

const beloveds = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filter = beloveds.filter((cat) => cat.startsWith("L"));
console.log(filter);
// [ "Leopard", "Lion" ]

// think back to the drawing circles example above, you don't have a collection of items to loop through: you really just want to run the same code 100 times. In a case like this you should use the for loop. here is the syntax 

for (initializer; condition; final-expression) {
    // code to run
}


// 1. the keyword for, followed by some parentheses. 

// 2. inside the parentheses we have three items, separated by semicolons: 

// i. an initializer - the is usually a variable set to a number, which is incremented to count the number of times the loop has run. It is also sometimes referred to as a counter variable. 

// ii. a condition - this defines when the loop should stop looping. this is generally an expression featuring a comparison operator, a test to see if the exit condition has been met. 

// iii. a final-expression - this is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or in some cases decrement). the counter variable, to bring it closer to the point where the condition is no longer true. 

// 3. some curcly braces that contain  bloc of code - this code will be run each time the loop iterates. 

// go over the follow example to visualize what these do more clearly. 

const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));


// this code calculates squares for the numbers from 1 to 9, and writes out the result. The core of the code iis the for loop that performs the calculation. 

// let's break down the (for (let i=1; i<9; i++))

// 1. let i = 1: the counter variable, i, starts at 1. Note that we have to use let for the counter, because we're reassinging it each time we go round the loop 

// 2. i < 10: keep going round the loop for as long as i is smaller than 10. 

// i++: add one to i each time round the loop. 

// how to loop through collections with a for loop: you can use a for loop to terate through a collection, instead of a for...of loop. 

// let's look again at our for...of example above:

const lovelyCats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"]

for (const lovelyCat of lovelyCats) {
    console.log(lovelyCat);
} 

// you could rewrite this code like this:

const resplendentCats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i=0; i < resplendentCats.length; i++) {
    console.log(resplendentCats[i]);
}

// in this loop we're starting i at 0, and stopping when i reaches the length of the array. then inside the loop, we're using i to access each item in the array in turn. 

// this works fine, and in early version of javascript, for...of didn't exist, so this was the standard way to iterate through an array. However, it offers more chances to introduce bugs into your code. 


// example 1: you might start i at 1, forgetting that the first array index is 0, not 1. 

// example 2: you might stop at i<= resplendentCats.length, forgetting that the last array index is at length -1. 

// for these reasons, it's usually best to use for...of if you can. 

// sometimes you will still need to use a for loop to iterate through an array. For example, in the code below we want to log a message listing our cats. 

const bestCats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of bestCats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "

// an example of a for loop used on an array and string concatenation 

// notice that the end of the code ends the sentence with a comma, but you would like to end with a period as sentences should end. 

// to do this you need to know when you are on the final loop iteration, and to do that you can use a for loop and example the value of i. 

const caressedCats = ["Pete", "Biggles", "Jasmine"];

let myAwesomeFavoriteCats = "My cats are called ";

for (let i = 0; i < caressedCatscats.length; i++) {
  if (i === caressedCats.length - 1) {
    // We are at the end of the array
    myAwesomeFavoriteCats += `and ${cats[i]}.`;
  } else {
    myAwesomeFavoriteCats += `${caressedCatscats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

// if you want to exit a loop before all the iterations have been completed, you can use the break statement. You've seen this in switch statements and used this in your rock paper scissors project. 

// a break statement will immediately exit the loop and make the browser move on to any code that follows it. 

// say you wanted to search through anarray of contacts and telephone numbers and return just the number we wanted to find? 

const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
  ];
  const para = document.querySelector("p");
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  
  btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
      const splitContact = contact.split(":");
      if (splitContact[0].toLowerCase() === searchName) {
        para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
        break;
      }
    }
    if (para.textContent === "") {
      para.textContent = "Contact not found.";
    }
  });

  



  
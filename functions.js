// in javascript, parameters are the items listed between the parantheses in the function declaration. 

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"

}

console.log(favoriteAnimal('Dragon'))

// here, the parameter is animal but it can also be pet, x, or blah. Someone reading the code will get a better idea of what should go there by writing the parameter as "animal" inside the parentheses of favoriteAnimal().

// By putting animal inside the parentheses of the favoriteAnimal() function, we are telling JavaScript that we will send some value to our favoriteAnimal function. This means that animal is just a placeholder for some future value.

// animal is just a placeholder in our function and the console.log call above is us saying "Please send 'Goat' to the function favoriteAnimal and use 'Goat' whereever the 'animal' placeholder is."

// interesting. if i remove goat from the argument then then the function will still print a string with an undefined value.

// write a function called add7 that takes one number and returns that number +7

function add7(someNumber) {
    return someNumber + 7
}

console.log(add7(6))

// write a function called multiply that takes 2 numbers and returns their product. 

function multiply(a,b) {
    return (a*b)
}

let w = multiply(10,6);
console.log(w);

// well i couldn't figure this part out on my own, but maybe for right now i just need to be okay with looking things up and finding a way to do things so that i can get my feet on the ground. 

// write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE, or Both. 

// ok i have no idea how to approach this, i looked it up on a learningjavascript reddit page and can somewhat understand the code. 

function capitalize(string){
    return string.charAt(0).toUpperCase() +string.slice(1).toLowerCase();
}

let wordsOfLife = capitalize('thIS iS fINE');

console.log(wordsOfLife);

// proud of myself for figuring out how to use this function properly on my own based on the early functions i already wrote 

// write a function called lastLetter that takes a string and rtunrs the verry last letter of that string

function lastLetter(string){
    return string.charAt(string.length - 1);
}

let wordAtLast = lastLetter('john');

console.log(wordAtLast);

// this attempt didn't work, it just return the function because the string couldn't be processed, meaning my function doesn't work. 

// ok i didn't actually input the correct value for my variable and now it returns nothing. this tells me that the function isn't doing what is intended. it is literally returning nothing. 

// ok my above method works and i was able to figure it out on my own. that's great. I want to try something with just the - 1 value, but i'm not sure why it doesn't work. 

// keep in mind that you can also call anonymous functions, functions that have no name 

(function () {
    alert("hello");
});

function logKey(event) {
    console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);

// When a user presses a key, the browser will call the function you provided, and will pass it a parameter containing information about this event, including the particular ke that th euser pressed.

// I nstead of efining a speration logKey() function, you can pass an anonymous function in addEventListener:

textBox.addEventListener("keydown", function (event) {
    console.log(`You pressed "${event.key}". `);
})

// if you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>:

textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}.`);
})

// If the function only takes one parameter, you can omit parentheses around the parameter: 

textBox.addEventListener("keydown", event => {
    console.log(`You  pressed"${event.key}". `);
})

// another important thing to consider when work with functions is scope. When creating a function, the variables and other things defined inside the function are inside their seperate scope, menaing that they are locked away in their own seperate compartments, unreachable from code outside the functions. 

// the top-level outside all your functions is called the global scope. Values defined in the glaobal scope are accessible from everywhere in the code. 

// JS is set up like this for various reasons, mainly because of security and organization. You sometimes don't want variables to be accessible from everywhere in the code. Example being external scripts that you call in from elsewhere could start to mess with your code and cause problems beucase they happen touseing the same variable names as other parts of the code, causing conflicts. 

// if you have two javascript files accessing the same html page with similar const variables called, only the const in the first value will be used. (I believe this is another example if the DOM)

// keep certain parts of your code in certain enclosures, like a zoo. 

// return tomorrow and do an exercise playing with scope. 
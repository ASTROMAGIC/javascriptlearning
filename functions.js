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


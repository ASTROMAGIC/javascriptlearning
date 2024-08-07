// part 2 of studying objects 

// let's go back to object John and refresh on the parts of it that we recognize 


let user = {
    name: "John",
    age: 30,
    "likes birds": true // multiword properties must be quoted 
}

// here we have used the object literal syntax to make the object John

// each property of the object has a key to go along with it. Name, age, and john liking birds are keys, what goes after the colon is the property of the object John. 

// remember that properties are key value pairs, the key is a string and the value can be anything

// property values can be accessed using the following commands 

alert( user.name); // output will be John 
alert( user.age); // output will be 30 

user.isAdmin = true; // remember that values can be anything, like how we made a boolean a value here 

// we can delete properties using the delete operator

delete user.age;

// for multiword properties dot access doesn't work 

// user.likes birds = true; // this will give a syntax error 

// there is a way to access multiword properties though 

let coolUser = {};

coolUser["likes birds"] = true; 
// set the property

alert(coolUser["likes birds"]);
// get the property 

delete coolUser["likes birds"];
// delete the property 


// square brackets provide a way to obtain the proprt name as the result of any expression - as opposed to a literal string 

let key = "likes birds"; 

// this is the same as user["likes birds"] = true;
user[key] = true; 

// here the variable key may calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility 


let magicUser = {
    name: "Hakeem",
    age: 30, 

}; 

let magicKey = prompt("What do you want to know about the user?", "name"); 


// access by variable 
alert( user[magicKey]); // John (if enter "name")

// you cannot use the dot notation in a similar way 

let chaosUser = {
    name: "Wanda",
    age: 29,
};

let chaosKey = "name"; 
alert( chaosUser.chaosKey) // this will return undefined


// you can use sqaure brackets in an object literal, when creating an object. This is calld computed properties. 

// for example 

let fruit = prompt("Which fruit to buy?", "apple"); 

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit. 

// so if a vistor enters "apple", bag will become {apple:5}

// it works the same as the next line of code 

let juicyFruit = prompt("Which fruit to buy?", "apple");

let juicyBag = {};

// take property name from the fruit variable 

juicyBag[juicyFruit] = 5; 

// square brackets allow for more complex exprsssions. 

let shinyFruit = 'apple'; 
let shinyBag = {
    [shinyFruit + 'Computers']: 5 // bag.appleComputers = 5 
}

// it goes without saying that square brackets are much more powerful that dot notation. They allow any property names and variables. But they are  more cumbersome to write. 

// most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets. 

// in real code, we often use existing variables as values for propert names. 

// for example 

function makeUser(name, age) {
    return {
        name: name,
        age: age,
        //.. and other properties you may want to add
    };
}
let visionaryUser = makeUser("Stephen", 35);

alert(visionaryUser.name); // Stephen 

// in this example, proprties have the same names as variables. The use-case of making a property from a variable is so common, that there's a special property value shorthand to make it shorter. 

// imagine the function above as the same as the one you will write below with this shorthand in mind 


function createUser(name, age) {
    return {
        name, 
        age, 
    };
}

// We can use both normal properties and shorthands in the same object:

let happyUser = {
    name, 
    age: 30
}; 

// property names do have some limitations. As we already know, a variable cannot have a name equal to one of the language-reserved words like "for" and "let" or "return"

// for objects, there is no such restriction. 

let obj = {
    for: 1,
    let: 2,
    return: 3
}; 

alert( obj.for + obj.let + obj.return); //6 

// property names have no limitations and they can be any strings or symbols ( a special type for identifies, to be covered later)

// other types are automatically converted to strings. 

// for example a number 0 becomes a string "0" when used as a property key:

let newObj = {
    0: "test", // same as "0": "test"
}; 

// both alerts access the same property (the number 0 is converted to string "0")

alert( newObj["0"]);

alert( newObj[0]); //test these respective outputs 






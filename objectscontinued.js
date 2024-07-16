// continued learning on objects 

// slight refresher on objects, plus beginning the tasks on objects from javascript.info

let obj = {};

obj._proto_ = 5; // number assigned 

alert(obj._proto_); // the value is an object, so this does not work as intended 

// _proto_ ignores being assigned to 5 here and behaviors in a weird way compared to other properties. You will learn different ways later to fix such behavior.

// other thing to learn in javascript is that it is possible to access any property. There will be no error if the property doesn't exist. Reading non-existing properties just returns undefined. 

let newUser = {};

alert ( newUser.noSuchProperty === undefined); // returns true which means no such property

// we can also use the operator "in"

"key" in obj // this is the syntax for "in"

// let's see in practice with a new object 


let shinyUser = { name: "Sarah", age: 30,
}; 

alert( "age" in shinyUser); // returns true, user.age exists 

alert( "blabla" in user); // returns false, user.blabla doesn't exist 

// remember that to the left side of in there must be a property name. It is usually a quoted string. If you omit quotes, that means a variable should contain the actual name to be tested. 

// for example 

let inUser = { age: 30 }; 

let key = "age"; 

alert( key in user ); // true, property "age" exists 

// most of the time, the comparison with undefined works fine. but there's a special case when it fails, but "in" works correctly. that's why "in" exists. 

// that case is when an object property exists, but stores undefined: 

let coolObj = {
    test: undefined
};

alert ( coolObj.test ); // it's undefined, so does this mean there is no such property? 

alert( "test" in obj); // returns true, because the property does exist and it is undefined 

// these situations are because undefined should not be explicitly assigned. You will mostly use "null" for unknown or empty values. The in operator will be an exotic guest in your code. 

// to walk over all keys of an object, there exists a speial form of the loop: for..in 

for (key in object) {
    // executes the body for each key among object properties
}

// let's output all the properties for a new user object 

let jsUser = {
    name: "John",
    age: 30, 
    isAdmin: true
};

for (let key in jsUser) {
    // keys 
    alert( key ); // name, age, isAdmin 

    //values for the keys 
    alert( jsUser[key]); // John, 30, true
}

//note that all for constructs allow us to decalre the looping variable inside the loop, like let key here

// we can also use another variable name her einstead of key. For instance "for (let prop in obj )" is also widely used 

// are objects ordered? do we get all properties in the same order they were added? can we rely on this?

// the answer is that objects are ordered in a special fashion: integer properties are sorted, others appear in creation order. 

// for example: consider an object with the phone codes: 

let codes = {
    "49": "Germany", 
    "41": "Switzerland",
    "44": "Great Britain", 
    // .. imagine extra codes here, down to 1 

    "1": "USA"
};

// notice that the last property in objects do not have commas to signify the end of the list 

for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}

// create a variable code to store selected properties from codes object, then alert it. 

// when this code is run, USA (1) goes first, then 41 and 44 and so on. 

// there are integer properties, which means a string can be converted to and from an integer without a change. 

// "49" is an integer property name, because when it's transformed to an integer number and back, it's still the same. But "+49" and "1.2" are not. 

// however, when keys are non-integer, they are listed in the creation order. for example 


let audioUser = {
    name: "Kelly", 
    surname: "Clarkson", 
}; 

audioUser.age = 25; // adding one more property

for ( let prop in audioUser) {
    alert ( prop ); // name, surname, age 
}

// you can fix the issue with with the phone codes by "cheating". you do this by making the codes non-integers. Adding a plus "+" sign before each code is enough. 


let newCodes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in newCodes) {
    alert( +code ); // 49, 41, 44, 1
  }

  
  
  
  
  // in summary, objects are associative arrays with several special features. 

  // they store in key-value pairs where: 

  // property keys must be strings or symbols (usually strings)

  // values can be any type 

  // to access properties we can use: 

  newCodes.property // dot notation 

  audioUser["property"]; // square brackets notation, which allow taking the key from a variable

// addition operators 

delete newUser.prop // deletes a property 

"key" in newUser // checks if a proprty with the given key exists, returns a boolean value 

for ( let key in newUser) {

} // iterates over an object using a for loop
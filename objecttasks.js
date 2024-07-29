// use what you have learned to complete the 4 tasks on javascript.info objects page. 

// task 1, build a basic object with specific properties 

let user = {
    name:"John",
    surname: "Smith",

}

user.name = "Pete";

delete user.name; 

// this was mostly right, but I did not create the empty object correctly. the solution is as follows 

let correctUser = {}; // this is an empty object 

correctUser.name = "John"; // add the property name with the value John 

correctUser.surname = "Smith"; // add the property surname with the value Smith 

correctUser.name = "Pete"; // change the value of the name to Pete 

delete correctUser.name; // remove the property name from the object. 

// check for emptiness. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {}; // empty object 

alert ( isEmpty(schedule) ); // should return true 

schedule["8:30"] = "get up"; 

alert( isEmpty(schedule) ); // should return false

function isEmpty(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true; 
}

// I think what I wrote about and the actual solution are both fine. I guessed correctly that the for..in loop was the best approach. For my own learning and further clarity, I will write the other solution 

function emptyObj(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true; 
}

// I have noted that these loops do not utilize else, and the key portion of the for loop will only appear once the obj is passed through the function 

// task 3: sum object properties 

// we have an object storing salaries of our team: 

let salaries = {
    John: 100, 
    Ann: 160, 
    Pete: 130
};

// wrote the code to sum all salaries and store in the variable sum. It should be 390 in the above example. If salaries is empty, then the result must be 0, or rather it should return 0. 

function sumSalaries (obj) {

}

// answer 1:

let totalSalaries = alert(salaries.John + salaries.Ann + salaries.Pete);

// but this doesn't account for scenaries where "salaries" may be empty, just for this object itself. this my answer based off what I had learned in objects already 


// real answer 

let sum = 0; 
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

// so it is still a for loop for objects that uses the keys themselves, which will let the sum be 0 if the object is actually empty. 

// task 4: multiply numeric property balues by 2 

// create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2. 

// before the call 
let menu = {
    width: 200, 
    height: 300, 
    title: "My menu"
};

multiplyNumeric(menu);

// after the call 

menu = {
    width: 400, 
    height: 600, 
    title: "My menu"
};

// multiplyNumeric does not need to return anything, only modifying the object in-place. You can use typeof to check for a number here 

// i can somewhat visualize what the answer should be 

function multiplyNumeric(obj) {
    for(let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2; 
        }
    }
}

// so it is still a for loop concerning the key in a given object. 

// note that == can convert and compare operates that are of different types. 

// === strict equality check whether two operands are equal, but always considers operands of different types to be different. 





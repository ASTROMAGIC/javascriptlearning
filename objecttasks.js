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

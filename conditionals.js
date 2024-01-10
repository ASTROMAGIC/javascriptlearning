// often when you write code, you want to perform different actions for different decisions. 

// you can use conditional statements in your code to do this. 

// in js we have the following conditional statements:


// use if to specifiy a block of code to be excuted, if a specified condition is true 
// use else to specificy a block of code to be executed, if the same condition is false 
// else if to specify a new condition to test, if the first condition is false 
// switch to specify many alternative blocks of code to be executed 

// The if statement 

if (condition) {
    //  block of code to be executed if the condition is true
  } 

// a good example of the if statement in action is to making a greeting for a certain time of day 

if (hour < 18) {
    greeting = "Good day";
}

// result of greeting is Good day 

// the else statement 

// Use the else statement to specify a block of code to be executed if the condition is false.

if (condition) {
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
  }

  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

// with the else statement, we can have a more complete version of the previous block of code that creates a greeting for night and day 

// the result is good day 

// the else if statement 

// use the else if statement to specify a new condition if the first condition is false. 

if (condition1) {
    //  block of code to be executed if condition1 is true
  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }


// example: If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

// the result will be good day

// continue with logical operators next study session 

// logical operators: AND, OR, NOT 

// if you want to test mutiple conditions without writing nested if...else statements, logical operators can help you. When used in conditions, the first two do the following: 

// && - AND, allows you to cchain together two or more expressions so that all of them have to individually evuluate to true for the whole expression true. 

// || - OR; allows you to chain together two or more expressions so that one or more of them have indivually evaluate to true for the whole expression to return true. 

// an example of AND in action 



if (choice === "sunny" && temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (choice === "sunny" && temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
  
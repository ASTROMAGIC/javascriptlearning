// one of the most useful abilities of javascript i its ability to manipulate the DOM

// the DOM is the document object model. it is a tree-like representation of the contents of webpage - a tree of nodes with different relationships depending on how they are in the HTML document. 

// picture an html div with it's children. think of the children nested in this div as family tree. the container is the parent and its children have their own branches 

// when working with DOM, you use "selectors" to target the nodes you want to work with. remember the following selectors you can use to refer to a div with the class "container":

// div.display, .display, #cotainer > .display, div#container > div.display 

// when your html code is parsed by a web browser, it is converted to the DOM. We'll start with query selectors, of which help you target nodes. 

// examples of query selectors 

element.querySelector(selector)  // returns a reference to the first match of selector

element.querySelectorAll(selectors) // returns a "NodeList" containing references to all of the matches of the selectors. 

// remember that when using query SelectorAll, the return value is not an array. It looks like on and somewhat acts like an array, but it is considered a "NodeList". The big distinction is that several array method are missing from NodeLists. 

// If problems arise, convert the NodeList into an array. You can do this Array.from() or the spread operator. 

// element creation 

document.createElement(tagName, [options]) // creates a new element of tage  type tageName. [options] in this case menas you can add some parameters to the function. Don't worry about these right now. 

const div = document.createElement("div");

// this function does NOT put your new element into the DOM - it creates it in memory. This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before placing it on the page. you can place the elemnt into the DOM with one of the following methods 

parentNode.appendChild(childNode) // appends childNode as the last child of parentNode. 

parentNode.insertBefore(newNode, referenceNode) // inserts newNode into parentNode before referenceNode 

// removing elements 

parentNode.removeChild(child) // removes child from parentNode on the DOM and returns a reference to child 

// altering elements 

// when you have a reference to an element, you can use that reference to alter the element's own properties. This allows you to do many useful alterations, like adding, removing, or altering attributes, changing classes, adding inline style info, and more. 

const divide = document.createElement("div"); // creates a new div referenced in the variable 'div'

// adding inline style 

div.style.color = "blue"; // adds the indicated style rule to the element in the div variable 

div.style.cssText = "color: blue; background: white;"; // add several style rules

div.setAttribute("style", "color: blue; background: white;"); // adds several style rules, extended 

// when accessing a kebab-cased CSS property like background-color with JS, you will need to either use camelCase with dot notation or bracket notation. When using bracket notation, you can use either cameCase or kebab-case, but the property name must be a string. 

div.style["background-color"];

// bracket notation with kebab-case

div.style["backgroundColor"];

// bracket notation with camelCase

// working with classes 

div.classList.add("new"); // addes class "new" to your new div 

div.classList.remove("new"); // removes "new" class from div 

div.classList.toggle("active"); // if div doesn't have class "active" then add it, or if it does, then remove it 

// it is often standard (and cleaner) to toggle a CSS style rather than adding and removing inline CSS 

div.TextContent = "Hello World!";  
// creates a text node containing "Hello World!" and inserts it in div

div.innerHTML = "<span>Hello World!</span>";

// Events 

// Event are actions that occur on your webpage, such as mouse-clicks or key-presses. Events allow you to make DOM manipulations on demand. 

// There are 3 primary ways to go about this: 1. specifying functions attributes directly on your HTML elements. 2. you can set properties in the form of on<eventType>, such as onlick or onmousedown, on the DOM nodes in your javascript. 3. You can attach event listens to the DOM nodes in your javascript. 

// event listeners are definitely the preferred method, but you will see others in use. We will cover all three


// method 1: 

<botton onclick="alert('Hello World')">Click me</botton>

// this solution is less than ideal because we're cluttering our html with javascript. You can also only set one "onclick" property per DOM element, so we're unable to run multiple seperate functions in response to a click event using this method. 

// method 2:

// in the html file 

// <button id="btn">Click me</button>

// in the javascript file 

const btn = document.querySelector("#btn"); 
btn.onclick = () => alert("Hello World");

// this is another arrow function. Here we've moved the JS out of the HTML and into a JS file, but we still have the problem that a DOM element can only have one "onclick" property 

// method 3: 

// in the HTML file: <button id="btn">Click me Too</button>

// in the javascript file 

const btn = document.querySelector("#btn"); 
btn.addEventListener("click", () => {
    alert("Hello World");
})

// Here we maintain seperation of concerns, and we also allow multiple event listeners if the need arises. Method 3 is much more flexible and powerful, thought it is a bit more complex to set up. 

// you can use all three methods with named functions like so 

// method 1 

function alertFunction () {
    alert("Yay you did it!");
}

// methods 2 and 3 

function alertingFunction() {
    alert("Yay! You've done it!");
}
const alertButton = document.querySelector("#btn");

// method 2 

btn.onclick = alertFunction; 

// method 3 

btn.addEventListener("click", alertingFunction);

// naming your functions can help clean up your code significantly, and it's a very good idea if the function is something that you are going to want to do in multiple places. 

// with all three methods, we can access more information about the event by passing a parameter to the function that we are calling. 

btn.addEventListener("click", function (e) {
    console.log(e);
});

// this is my first time seeing syntax like this, might be a good idea to revisit this a couple of times over the next few days. 

// when you pass in alertFunction or function (e) {...} as an argument to addEventListener, we call this a callback. A callback is simply a function that is passed into another function as an argument. 

// The e parameter in this callback function contains an object that references the event itself. Within the object you can have access to many useful properties and methods (functions that live inside an object) such as which mouse button or key was pressed, or information about the event's target - the DOM node that was clicked. 

// try these later in a seperate file 

btn.addEventListener("click", function(e) {
    console.log(e.target)
});

// and then 

btn.addEventListener("click", function (e){
    e.target.style.backgroundColor = "blue";
});

// I will assume these change the file or make the function work in some way. I will have to see later 

// There are ways of attaching similar event listeners to many elements. Remember that you can get a node list of all the items matching a specific selector with querySelectorAll('selector') To add a listen to each of them, we need to iterate through the whole list. 

// imagine a div container with 3 buttons to click. the buttons are basically a node list. This is an example of js code that can add event listeners to all of them simultaneously. 

const pinkButtons = document.querySelectorAll("Button");

// remember that buttons is a node list, and acts much like an array. 

// we use the .forEach method to iterate through each button 

pinkButtons.forEach((button) => {
    // and for each one we add a 'click' listener 
    button.addEventListener("click", () => {
        alert(button.id);
    });
})

// for tomorrow, complete mdn's avtive learning sections on DOM manipulation and test your skills 

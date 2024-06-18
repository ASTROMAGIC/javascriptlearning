// in this file I will learn about javascript events, event models, and how to handle events

// events are actions that the web browser can detect and respond to, like a mouse click or a page load. 

// if you wanted to display an alert when a user clicks  button 

let btn = document.querySelector('#btn');

function handleClick () {
    alert('It was clicked!');
}

btn.addEventListener('click', handleClick)
// say we have an html element with the id "btn" that says Click me! 

// the querySelector mother selects the button with the id you specify 

// then we define a function called handleclick as an event handler 

// finally we register an event handler using the addEventListener() so that when users click the button, the display() function executes 

// what we have seen regularly so far in the creation of these event handlers are arrow functions. here is an alternate way of re-writing the function we just wrote 

let redButton = document.querySelector('#rbtn');

redButton.addEventListener('click', ()=> {
    alert('Red button clicked!');
});

// definitely going to need about 4 days to get through these and actually learn from them. i won't skim and there is no need to rush 

// assume you have a simple html document with a title and one div container with one button inside the div 

// we will use this example to talk about event flow. There are two main event models 

// event bubbling and event capturing 

// event bubbling, an event starts at the most specific element then flows upward toward the least specific element such as the document or the window 

// when the button is clicked, the click event occurs in the following order 

// button -> div with the id container -> body -> html -> document 

// In essenece, the click event first occurs on the button which the element that was clicked, then the "click" event goes up the DOM tree, firing on each node along its way until it reaches the document object. 


// note that modern web browsers bubble the event up to the window object. 

// In the event-capturing model, an event starts at the least specific element and flows downward toward the most specific element. 

// when you click the button, the click event occurs in the following order: 

// document -> html -> body -> div with the id container -> button. Essentially the reverse of event bubbling. 

// there is also DOM level 2 Event flow, which has 3 phases 

// 1. event capturing occurs, which provides the opportunity to intercept the event. 

// 2. Then, the actual atarget recieves the event. 

// 3. Event bubbling occurs, which allows a final response to the event. 

// Event Object: when the event occurs, the web browser passes an Event object to the event handler: 

let blueBtn = document.querySelector('#blueBtn');

blueBtn.addEventListener('click', function(event){
    console.log(event.type);
});

// the output should be click 

// There are several commonly used properties and methods for the event object. Come back and reference them when needed. 

// Note that the event object is only accessible inside the event handler. Once all the event handlers have been executed, the event object is automatically destroyed. 

// you can prevent the default behavior of an event by using the preventDefault() method. 

// example: you click a link and the browser navigates you to the url specificed with the href attribute 

// this behavior can be prevented by using the preventDefault() method of the event object 

let link = document.querySelector('a');

link.addEventListener('click', function(event){
    console.log('clicked');
    event.preventDefault();
});

// preventDefault does not stop the event from bubbling up the DOM. An event can be canceled when its cencelable property is true. 

// the stopPropagation() method immediately stops the flow of an event through the DOM tree, but does not stop the browser's default behavior. 

let yellowBtn = document.querySelector('#yellowBtn');

yellowBtn.addEventListener('click', function(event){
    console.log('The button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click', function(event){
    console.log('The body was clicked!');
});

// without the stopPropagation() method, you would see two messages on the console window. 

// However, the click event never reaches the body beccause the stopPropagation() was called on the click event handler of the button 




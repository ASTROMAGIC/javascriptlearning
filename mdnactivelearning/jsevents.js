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




// event delegation is important to know as it will help preserve memory and remove the need to write multiple event listeners for different DOM nodes 

// imagine query selectors and eventlisteners for menu items in an html document 

let home = document.querySelector('#home');
home.addEventListener('click',(event) => {
    console.log('Home menu item was clicked');
});

let dashboard = document.querySelector('#dashboard');
dashboard.addEventListener('click',(event) => {
    console.log('Dashboard menu item was clicked');
});

let report = document.querySelector('#report');
report.addEventListener('click',(event) => {
    console.log('Report menu item was clicked');
});


// there is nothing wrong with this code as is but what happens in practice?

// each event handler is a function which is also an object that takes up memory. The mroe objects in the memory, the slower the performance. 

// it also takes time to assing all the event handlers, which causes adelay in the interactivity of the page. 

// this issue can be solved with event bubbling 

// instead of having multiple event handlers, you can assign a single event handler to handle all click events

let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});

// this examples makes use of arrow functions, event bubbling, and switch/break cases all in one. I might end up using this a lot. 

// here is what is happening: when you click any <a> element inside the <ul> element with the id menu, the click event bubbles to the parent elemment which is the <ul> element. So instead of handling the click event of the individual <a> element, you can capture the click event at the parent element. 

// In the click event listener, you can access the target property which references the element that dispatches the event. To get the id of the element that the event fires, you use the target.id property.

// Once having the id of the element that fires the click event, you can have the code that handles the event correspondingly.

// the way you handle too many event handlers is through event delegation. Event Delegation refers to the tehnique of using event bubbling to handle events at a higher level in the DOM than the element on which the event originated 

// when possible, you can have a single event handler on the document that will handle all the events of a particular type. By doing this you can the following benefits: less memory usage, better performance, less time required to set up event handlers on the page, and the document object is available immediately. As long as the element is rendered, it can start functioning correctly without delay. You don't need to wait for th eDOMContentLoaded or load events. 
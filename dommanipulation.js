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




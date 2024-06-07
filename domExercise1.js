// add the following elements to the container using ONLY javascript and the DOM methods you have learned so far

// 1. paragraph element with red text that says "Hey I'm red!"

// 2. a <h3> heading element with blue text that says "I'm blue h3!"

// 3. a div element with a black border and pink background color with the following elements inside of it: 

//another <h1> heading element that says "I'm in a div"

//a paragraph <p> element that says "ME TOO!"

// hint: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container

const para = document.createElement("paragraph");
para.textContent = "Hey I'm red!";
para.style = "color: red;";


const headThree = document.createElement("h3");
headThree.style = "color: blue;";
headThree.textContent = "I'm blue h3!";

const div = document.createElement("div");
div.setAttribute("border-color: black; background-color: pink;");
div.classList.add("h1");
div.textContent = "I'm in a div!";

// setAttribute sets actual attributes like "id" "class" or "src"

// the style property applies CSS styles directly to an element 

// it is better to create the h1 and p elements seperately and append them to the div

//  adding classes does not replace the need to create and append the elements themselves. It's also not necessary for this problem unless you wanted to style them using CSS classes. 
div.classList.add("p");
div.textContent = "ME TOO!";

container.appendChild(div);

// ok so this solution was wrong. the proper way to write is as follows 

const divider = document.createElement("div");
// creating the div element 

divider.style.border = "5px solid black";
divider.style.backgroundColor = "pink";
// styling the div 


const h1 = document.createElement("h1"); 
h1.textContent = "I'm in a div!";
// create the h1 element 

const paragraph = document.createElement("p");
paragraph.textContent = "ME TOO!";
// create the p element 

divider.appendChild(h1);
divider.appendChild(paragraph);
// append the h1 and p elements to the div 



// now lets observe the differences between what I wrote and the corrected version 





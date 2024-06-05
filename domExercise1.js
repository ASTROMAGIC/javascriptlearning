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

div.classList.add("p");
div.textContent = "ME TOO!";

container.appendChild(div);




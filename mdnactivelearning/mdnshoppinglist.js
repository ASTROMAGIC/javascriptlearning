// make a simple shopping list example that allows you to dynamically additems to the list using a form input and button. when you add an item to the input and press the button 

// the item should appear in the list 

// each item should be given a button that can be pressed to delete that item off the list 

// the input should be empited and focused ready for you to enter another 

const h1 = document.querySelector("h1");

const div = document.querySelector("div");

const button = document.querySelector("button");

button.addEventListener("click", ()=>{
    let initialValue = document.getElementById("input");
    initialValue = '';

})

const listItem = document.createElement("li");

const span = document.createElement("span");
span.textContent = initialValue;

const buttonElement = document.createElement("button");
buttonElement.textContent = "Delete";

listItem.appendChild(span);
listItem.appendChild(buttonElement);

div.appendChild(listItem);

buttonElement.addEventListener("click", ()=>{
    listItem.remove()
})

document.getElementById("input").addEventListener("click", () =>{
    document.getElementById("Add item").focus();
})

// this is my first attempt and this dynamic shopping list. I will put this on github and compare with a proper solution. 
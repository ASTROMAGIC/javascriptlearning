// make a simple shopping list example that allows you to dynamically additems to the list using a form input and button. when you add an item to the input and press the button 

// the item should appear in the list 

// each item should be given a button that can be pressed to delete that item off the list 

// the input should be empited and focused ready for you to enter another 

const list = document.querySelector("ul");

const input = document.querySelector("input");

const button = document.querySelector("button");

// so first off, most of my variables are off. I should have made elements for the unordered list, input, and the button to click. I made one for the heading??? I'm still to fearful to actually look at the document and intuitively decide the changes based on what I know. 

// for every piece of javascript I add here, there should be HTML that already exists for which it is supporting. 

button.addEventListener("click", ()=> {
    const myItem = input.value;
    input.value = '';

    // the initial idea for the my button event listener was somewhat right, but I did not know that an input value for a variable could be written like this 

const listItem = document.createElement("li");
const listText = document.createElement("span");
const listBtn = document.createElement("button");

// I see that it is a good idea to group my variables that are being called together at the same time. It may also be a good idea to change the name of the variables together once I get a better idea of how the javascript file will look in context. 




listItem.appendChild(listText);
list.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = "Delete";
list.appendChild(listItem);



listBtn.addEventListener("click", ()=>{
    list.removeChild(listItem);
});

input.focus();
});

// I had the entire structure of this program incorrect. It seems I need to work on reading the syntax of JS better in order avoid early bugs. 
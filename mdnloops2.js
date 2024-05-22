// write a program that, given a name, searches an array of objects containing names and phone numbers (phonebook), if it finds the name, outputs the name and phone number into the paragraph (para) and then exits the loop before it has run its course

// i've seen this before 

const phonebook = ["Jason:223344", "John:113355", "Hakeem:441155", "Dimitri:889900", "Derrick:772233"];

const para = document.querySelector("p");
const input = document.querySelector("input");
const buttn = document.querySelector("button");

buttn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of phonebook) {
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}. `;
            break; 
        }
    }
    if (para.textContent === "") {
        para.textContent = "Contact not found.";
    }
});

// this is one way of writing this code. i need to become more familiar with the writing process of this 


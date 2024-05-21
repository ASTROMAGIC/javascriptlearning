// write a simple loop that goes through all the items in an array and prints them out on the screen inside list items. 

const myArray = ["Supra", "M240i", "Z8", "Type-R", "Lotus"];

const list = document.querySelector("li");

for (const cars of myArray) {
    console.log(cars);
}
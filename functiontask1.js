// for the first function task, write a function that prints a random name from the provided array (names) to the provided paragraph (para), and then run it once 


const names = ['Chris', 'Jason', 'Hakeem', 'Dimitri', 'Anyi', 'Jade', 'Frank', 'John', 'Jimbo', 'Jaime']

function random_Name(names) {
 return names[names[Math.floor(Math.random() * names.length)]];
}

console.log(random_Name(names));


// this would be the function as concise as possible in the context of the html file. 

// i want to write a function that a prints a random name from the provided array to the provided paragraph. 


// create a function that draws a rectangle on a provided canvas element, based on these five provided input variables 

// 
//x — the x coordinate of the rectangle.
//y — the y coordinate of the rectangle.
//width — the width of the rectangle.
//height — the height of the rectangle.
//color — the color of the rectangle.

function draw () {
    let x = 50; 
    let y = 100;
    let width = 90; 
    let height = 60; 
    let color = green;
}

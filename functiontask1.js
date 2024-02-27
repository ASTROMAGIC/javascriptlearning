// for the first function task, write a function that prints a random name from the provided array (names) to the provided paragraph (para), and then run it once 


const names = ['Chris', 'Jason', 'Hakeem', 'Dimitri', 'Anyi', 'Jade', 'Frank', 'John', 'Jimbo', 'Jaime']

function random_Name(names) {
 return names[names[Math.floor(Math.random() * names.length)]];
}

console.log(random_Name(names));


// this would be the function as concise as possible in the context of the html file. 

// i want to write a function that a prints a random name from the provided array to the provided paragraph. 

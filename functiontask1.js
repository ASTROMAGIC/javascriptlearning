// for the first function task, write a function that prints a random name from the provided array (names) to the provided paragraph (para), and then run it once 


const names = ['Chris', 'Jason', 'Hakeem', 'Dimitri', 'Anyi', 'Jade', 'Frank', 'John', 'Jimbo', 'Jaime']



function chooseName(){
    return console.log(names[Math.floor(random(1,8))-1]);
   }



let nameSelect = chooseName(names);

console.log(nameSelect);

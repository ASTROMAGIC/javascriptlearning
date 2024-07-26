// array cardio 2, featuring .some, .every, .find., and .findIndex 

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986},
    { name: 'Irv', year: 1970},
    { name: 'Lux', year: 2015},
]; 

// here we have an array that contains objects as its items 

const comments = [
    { text: 'Love this!', id: 523423},
    { text: 'Super good', id: 823423},
    { text: 'You are the best', id: 2039842 },
    {text: 'Ramen is my favorite food ever', id: 123523},
    { text: 'Nice Nice Nice!', id: 542328 },
];

// some and every checks 
// array.prototype.some() // is at least one person 19? 

 

const possiblyAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear;
    return currentYear - person.year >= 19;
})

// I have noticed reducing and making the functions more readable often involves an arrow function and removing the 'returning' of some data. 



// array.prototype.find()
// find is like filer, but instead returns just the one you are looking for 
// find the comment with the ID of 823423 

const comment = comments.find(function(comment) {
    if(comment.id === 823423) {
        return true;
    }
}); 

// try turning this into an arrow function with an implicit return 

const hotComment = comments.find(comment => comment.id === 823423);

console.log(hotComment);





// array.prototype.findIndex()
//find the comment with this ID
// delete the comment with the id of 823423 


const index = comments.findIndex(comment => comment.id === 823423); 

comments.splice(index, 1);

// and you can make an entirely new array minus the item you no longer want. 

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

// review the spread operator
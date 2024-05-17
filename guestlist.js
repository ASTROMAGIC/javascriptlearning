// for this exercise, i will need to take a list of name stored in an array and put them into a guest list. I will need two lists, one for guest to admit, and one for guests to refuse. 

// needs:

// a loop that will iterate through the people array 

// during each loop iteratio, check if the current array item is equal to phil or lola using a conditional statement 

// if it is, concatenate the array item to the end of the refused paragraph's textcontent, followed by a comma and a space 

// if it isn't, concatenate the array item to the end of the admitted paragraph's textcontent, followed by a comma and a space. 

// extra: use string methods to slice off possible left over commas and add a full stop to the end. 

const people = ['Chris' , 'Anne' , 'Colin' , 'Terri' , 'Phil' , 'Lola' , 'Sam' , 'Kay', 'Bruce'];

const admitted = document.querySelector(' .admitted');
const refused = document.querySelector(' .refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// write your loop here 


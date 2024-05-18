// for this exercise, i will need to take a list of name stored in an array and put them into a guest list. I will need two lists, one for guest to admit, and one for guests to refuse. 

// needs:

// a loop that will iterate through the people array 

// during each loop iteration, check if the current array item is equal to phil or lola using a conditional statement 

// if it is, concatenate the array item to the end of the refused paragraph's textcontent, followed by a comma and a space 

// if it isn't, concatenate the array item to the end of the admitted paragraph's textcontent, followed by a comma and a space. 

// extra: use string methods to slice off possible left over commas and add a full stop to the end. 

const people = ['Chris' , 'Anne' , 'Colin' , 'Terri' , 'Phil' , 'Lola' , 'Sam' , 'Kay', 'Bruce'];



const admitted = document.querySelector(' .admitted');
const refused = document.querySelector(' .refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// write your loop here 

// remember the 3 parts of a loop: initializer, condition, and iteration. 

// so i have a for loop that goes through the entire array. IF one of those items iterated over is "Phil" or "Lola", use a conditional statement that utitilzes the refused textcontent variable. ELSE use the admitted textcontent variable. 

for (let i = 0); i < people.length; i++) {
    if (i === people.) {
        console.log(refused);
    }
    
}

// so this type of for loop could work, but let me try for of 
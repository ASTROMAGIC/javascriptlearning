// array manipulation exercises part 1 

// .filter .map .reduce .sort 

const inventors = [ 
    { first: 'Albert', last: 'Einstein' , year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton' , year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei' , year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie' , year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kelper' , year: 1571, passed: 1630 },
    { first: 'Nicholaus', last: 'Copernicus' , year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck' , year: 1858, passed: 1947 }
];

// notice the structure of this constant variable, it is an array of objects all stored within a variable. This is my first time seeing such a thing but I will get used to seeing it eventually 

const people = [ 'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving','Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano','Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',];

// array.prototype.filter()
// 1. filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(function(inventor) {
    if(inventor.year >= 1500 && inventor.year < 1600) {
        return true; // keep it!
    }
}
);

// if the inventor year is greater than or equal to 1500 and less than or equal to 1600, return true. 

console.table(fifteen);

// filter works by passing it a function which loops over every item in our array based off the parameters you set. 

// you can reduce this code as well by rewriting it as an arrow function. 

const sleakFifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <1600));

// array.prototype.map()
// 2. gives us an array of inventory first and last names 

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames); // backtick string concatenation added so that names have proper spacing. This seems to be the most reliable method to return strings with some space .

// also note that these array methods have mostly been written as arrow functions so far. 

// think of map as a factory machine that takes in raw materials and stamps them when they come out of the machine. map always returns the same size array it is passed, where filter will take only the specific items that fit the parameters. 


// array.prototype.sort()
const ordered = inventors.sort(function(a, b) {
    if(a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});

console.table(ordered);

// a and b represent the first person and second person respectively. 

// I still need some time to understand this and 100% should return to it at some point. What I understand about this sort function right now is that the 1 and -1 are telling the sort function how to order the array. 

// if the year of a is greater than the year of b, the function returns 1, which indicates that a should come after b. 

// if the year of a is less than the year of b, the function returns -1, which indicates that a should come before b. 

// here is the shortened version 

const sleakOrdered = inventors.sort((a,b) => a.year > b.year ? 1: -1);
console.table(sleakOrdered);


// array.prototype.reduce()
// 4. how many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// I definitely need to go back to understand how this works and how to use it. 


// sort the invetors by years lived 


const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year; 
    return lastGuy > nextGuy ? -1 : 1; 
});

console.table(oldest);

// 6. create a list of boulevards in paris that contain 'de' anywhere in the name 
// https://en.wikipedia.org/wiki/category:boulevards_in_paris 

// this is a very good exercises that will make you use dev tools and DOM interpretation. you will also use document.queryselector 

// first you need to get the dom elements out of the page. Use Document.queryselector. What do you select?

const category = document.querySelector('.mw-category');

// find the links within it 

const links = Array.from(category.querySelectorAll('a'));

// note:queryselectory returns a node list, but for this method to work you need the items you're working with to be array items. there are a couple of ways you can do this: 

// method 1 will be featured and I will make another const variable with the second method. I think array.from is more readable. 

// here is method 2: a spread 

const arrayLinks = [...category.querySelectorAll('a')];

// you can call queryselector for any exist dom element, remember this when trying a similar method with other online items. this can also be done in one step

// first you need to convert this list of links into a list of names. then filter the names into a list that contain "de"

const de = links                                                                                                                            .map(link => link.textContent)
.filter(streetName => streetName.includes('de'));

// writing 'de' into the console gives the street names, you can use map and ten filter to perform you operation in one variable 

// start from number 6 next study session.

// 7. sort exercise 
// sort the people alphabetically by last name 

// this exercise will use the people constant 

const alpha = people.sort(function(lastOne, nextOne){
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
    
    
    
})

console.log(alpha);



// the last names are what will determine the order. the first names are only present so that they may be written with the last names. 

// notice that these array methods are usually utilizing const variables, then arrow functions with a period to activate the array method that will be utilized. you need to practice these methods with a variety of situations to see as many outcomes as possible. this is how you will get comfortable using them

// 8. reduce exercise 

//sum up the instances of each of these 

const data = ['car', 'car', 'truck', 'truck','bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']; 

// reduce is a very flexible method, this is just one of the ways you can use it 

const transportation = data.reduce(function(obj, item) {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;


}, {});

console.log(transportation);

// start with a blank object, we see if there is a 0 to work with, then we increment to count it. 




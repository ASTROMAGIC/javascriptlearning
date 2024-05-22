// i = 500, this will be your iterator. para is a reference to a paragraph element, which will be used to report the results. 

// isPrime(), a function that, when passed a number, returns true if the number is a prime number, and false if not. 

const para = document.querySelector("para");

function isPrime(num) {
    if (num <= 1) {
        para.textContent = `${num} is not a prime number.`;
        return false;
    }

    for (let i=2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            para.textContent = `${num} is not a prime number.`;
            return false;
        }
    }

    para.textContent = `${num} is a prime number. `;
    return true;
}    
/*
Write an if…else statement that:
- Prints “even” if the number is an even number
- Prints “odd” if the number is an odd number

Hint: Use the %(modulo) operator to determine is a number is even or odd.
*/

const number = 5; // Change your number to test your if statement

if (number % 3 === 0) {
    console.log(`${number}: even`)
} else {
    console.log(`${number}: odd`)
}
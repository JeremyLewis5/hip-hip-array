/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Colin',
  'Mesi',
];
console.log('Challenge 1')
//console.log(students);
var i;
for (i = 0; i < students.length; i++) {
  console.log()
} 

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
console.log('Challenge 2')
console.log(grades)
grades.reverse(grades);
console.log(grades)


// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
console.log('Challenge 3')
positiveNumbers.splice(0, 1)
//console.log(positiveNumbers)
positiveNumbers.splice(1, 1)
//console.log(positiveNumbers)
positiveNumbers.splice(1, 1)
console.log(positiveNumbers)

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
console.log('Challenge 4')
mixedSignNumbers.splice(0, 2)
mixedSignNumbers.splice(2, 1)
mixedSignNumbers.splice(3, 1)
console.log(mixedSignNumbers)

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
console.log('Challenge 5')
console.log(symmetricalCapitals)
symmetricalCapitals.splice(0, 2)
console.log(symmetricalCapitals)
symmetricalCapitals.splice(8, 1)
console.log(symmetricalCapitals)

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
console.log('Challenge 6')
fibonacciNumbers.unshift('bacon')
console.log(fibonacciNumbers)
fibonacciNumbers.push('sausage, ham')
console.log(fibonacciNumbers)
// fibonacciNumbers.push('ham')
// console.log(fibonacciNumbers)

// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
console.log('Challenge 7')
const newString = [];
console.log(newString)
//I don't understand what the instructions are asking for on this challenge!!


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
console.log('Challenge 8');
const newString2 = [];
newString2.push(3);
console.log(newString2);
newString2.unshift(2)
console.log(newString2);
newString2.push(4);
console.log(newString2);
newString2.unshift(1)
console.log(newString2);
newString2.push(5);
console.log(newString2);

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
console.log('Challenge 9');


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.


// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
console.log('Challenge 11');
console.log(students.slice(3, 10))

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
console.log('Challenge 12');
console.log(dinosaurs.splice(4, 6))

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
console.log('Challenge 13');
console.log(dinosaurs.join('*'));



// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
console.log('Challenge 14');
console.log(dinosaurs.reverse());
console.log('Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur');

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
console.log('Challenge 15');
const arr15 = primaries.concat(secondaries);
console.log(arr15);
console.log('red')
console.log('yellow')
console.log('blue')
console.log('orange')
console.log('green')
console.log('purple')
//console.log('red', 'yellow', 'blue', 'orange', 'green', 'purple')
console.log(['red', 'yellow', 'blue'] + " " + ['orange', 'green', 'purple'])
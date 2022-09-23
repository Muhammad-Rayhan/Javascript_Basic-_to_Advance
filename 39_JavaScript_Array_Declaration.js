// Array literal || [] ||
var array = [1, 2, 3, 4, 5];
console.log(array[3]); //Print Index Number Value (Index Number Start in 0 to Array Length)

var array2 = [1, 2, 3, 4, 5];
array2[9] = 10; // Pass a Value Inside Into a Array (Set Any Index Number Value)
console.log(array2); // [ 1, 2, 3, 4, 5, <4 empty items>, 10 ]
console.log(array2[6]); // If We Are Print Any Undefined Number Than Print Undefined

// Array constructor || new Array() ||
var fruits = new Array('Mango', 'Banana', 'Apple'); 
console.log(fruits);  // [ 'Mango', 'Banana', 'Apple' ]


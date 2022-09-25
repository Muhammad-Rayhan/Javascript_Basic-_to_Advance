// Array literal || [] ||
var array = [1, 2, 3, 4, 5];
array[0] = 20; // Update/Replace First Index Value To 20
console.log(array); //Print Index Number Value (Index Number Start in 0 to Array Length)

var array2 = [1, 2, 3, 4, 5];
array2[9] = 10; // Pass a Value Inside Into a Array (Set Any Index Number Value)
console.log(array2); // [ 1, 2, 3, 4, 5, <4 empty items>, 10 ]
console.log(array2[6]); // If We Are Print Any Undefined Number Than Print Undefined

// Array constructor || Array() ||
var fruits = Array('Mango', 'Banana', 'Apple'); 
console.log(fruits);  // [ 'Mango', 'Banana', 'Apple' ]

var str = 'Hello';
var str1 = 'Rayhan';
var str2 = 'Hossain';

var strarry = Array(str, str1, str2);
console.log(strarry);

// Challange
var num = [1, 5, 22, 9, 10];
// console.log(num.length); //Easy Way to Print Arrays Length
var a = "I am";
var b = "Rayhan";
var c = a.concat(b); //Concate Two Variable.
console.log(c);

var str = "My name is Rayhan";
console.log(str.substr(11, 3));

console.log(str.charAt(11)); //Useing any index number to print Any charecter

console.log(str.startsWith('My name')); // If str variable value start ('My name') than return output true else return output false
console.log(str.endsWith('My name')); // If str variable value End ('Rayhan') than return output true else return output false

console.log(str.toUpperCase()); // Make str variable value all upper case & output this value
console.log(str.toLowerCase()); // Make str variable value all lower case & output this value

var str2 = '   Rayhan   ';
console.log(str2.trim()) // Remove Unwanted space in a variable

console.log(str.split(' ')); // To use split make a sentense to array

var text = "Bangladesh";
console.log(text.length); // Length not a function, count any string total value

var about = "Dhaka is our capital city";
console.log(about.replace("Dhaka", "Khulna")); // Replace any string to another String

var array = str.split(" ");
console.log(array[1]);

var aboutMyself = "Hello! My Name is Rayhan Hossain";
console.log(aboutMyself.slice(7, 9)); 



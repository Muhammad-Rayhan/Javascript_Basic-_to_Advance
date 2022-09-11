var number = 12;
var str = '';

if(number % 2 == 0){
    str = "Even"
} else {
    str = "Odd";
}

console.log(str);

//Ternary Operator
var value = (number % 2 == 0) ? "Even" : "Odd";
console.log(value);
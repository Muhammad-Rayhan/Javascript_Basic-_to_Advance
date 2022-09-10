// && || !

// && = and
// || = or
// ! = not

// A && B
// true && true = true
// false && true = false
// true && false = false
// false && false = false

// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false = false

var a = 10;
var b = 20;
var c = 30;
var d = 40;

if(a < b && c > d){
    console.log(true);
} else {
    console.log(false);
}

if(a < b || c > d){
    console.log(true);
} else {
    console.log(false);
}

console.log(!(a < b));
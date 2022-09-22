// Length Property Start Count 1 to ....
// But Array Values Start Count 0 to ....

var str = "Hello! My Name is Rayhan";

//Long Process to Print Number of Total Length
var length = 0;

while (true) {
  if (str.charAt(length) == "") {
    break;
  } else {
    length++;
  }
}
console.log(length);

//Simple Process to Print Number of Total Length
console.log(str.length);
console.log(`We are Winenr`.length);

var array = [`Rayhan`, `Rakib`, `Robiul`];
console.log(array.length);

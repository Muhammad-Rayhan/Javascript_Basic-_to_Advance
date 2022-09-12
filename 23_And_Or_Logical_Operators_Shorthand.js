var name = ""; //Empty String

// Langthy Process For Output Fullname Value or Default Value
/*

var fullName = name;

if (fullName.length == 0) {
    console.log("Rayhan Hossain");
} else {
    console.log(fullName = name);
}
*/

// Short Process For Output Fullname Value or Default Value
var fullName = name || "Rayhan Hossain"; // If the name variable has any data than store name data into fullName variable. At last print this name value || (or) the name variable has empty('') than print default name (Rayhan Hossain)
console.log(fullName);

// =========================================================================================

//Second Short Method
var isOk = true;

// Langthy Process For Output Any Value
/*
if(isOk){
    console.log("Everything is ok");
} else{
    console.log("Everything is wrong");
}
*/

// Short Process For Output Fullname Value or Default Value
isOk && console.log("Everything is ok");  // If isOk is true than print console or isOk is false than print empty. Only use one statement

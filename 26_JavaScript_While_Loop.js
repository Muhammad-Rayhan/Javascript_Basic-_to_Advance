/*
    var i = 1;
    while(i <= 10){
        console.log("Md Rayhan");
        i++;
    }
*/

//Why use while loop a simple example
var boolean = true;
while(boolean)
{
    var number = Math.floor(Math.random() * 10 + 1);
    if(number == 9)
    {
        console.log("Winner Winner Checken Diner");
        boolean = false
    } else {
        console.log("You Number is " + number);
    }
}
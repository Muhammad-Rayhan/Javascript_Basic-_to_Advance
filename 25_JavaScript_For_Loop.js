// {} = JavaScript Block

//Print 1 to 100
/*
for(var i = 0; i < 100; i++)
{
    console.log((i + 1) + " Rayhan");
}
*/

//Print 100 to 1
/*
for(var i = 100; i > 0; i--)
{
    console.log(i + " Rayhan");
}
*/

//Even Number Print Loop
/*
    for(var i = 1; i <= 100; i++){
    if(i % 2 == 0)
    {
        console.log(i);
    }
}
*/

//Odd Number Print Loop
/*
    for(var i = 1; i <= 100; i++)
    {
        if(i % 2 == 1)
        {
            console.log(i);
        }
    }
*/

//Reverse Even Number Count
/*
    for(var i = 100; i > 1; i--)
    {
        if(i % 2 == 0)
        {
            console.log(i);
        }
    }
*/


// 1 to 100 number summation 
/*
    var sum = 0;
    for(i = 1; i <= 10; i++)
    {
        sum += i;
        console.log(sum);
    }
*/

var sum = 0;
for(var i = 1; i <= 10; i++)
{
    var result = sum + i;
    console.log(sum + " + " + i + " = " + result);
    sum = result;
}
console.log("Total = " + sum);
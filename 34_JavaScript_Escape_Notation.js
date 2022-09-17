// Escape Notation / Character

// var str = "This is a \"String\""; //When we need double courtesan in-side double courtesan than use Escape \" \" Notation.
var str = 'This is a \'String\''; //When we need single courtesan in-side single courtesan than use Escape \' \' Notation.
console.log(str); //This is a 'String'

var str2 = 'This is \tme'; //If you went to need tab space before any character than use Escape \t Notation
console.log(str2); //This is         me

var str3 = "We leave in \nBangladesh"; //If you went to need line break before any character than use Escape \n Notation
console.log(str3);  /* We leave in
                        Bangladesh
                    */

var str4 = "We leave in \bBangladesh"; //If you went to need remove back space before any character than use Escape \b Notation
console.log(str4); //We leave inBangladesh

var str5 = "We leave in \\Bangladesh"; //If you went to need backslash before any character than use Escape \\ (\=singleslash) Notation
console.log(str5); //We leave in \Bangladesh


var date = new Date();

//Date Print Projet Using if else if Condition

// if(date.getDay() == 0) {
//     console.log("Today is Sunday");
// } else if (date.getDay() == 1) {
//     console.log("Today is Monday");
// } else if (date.getDay() == 2) {
//     console.log("Today is Tuesday");
// } else if (date.getDay() == 3) {
//     console.log("Today is Wednesday");
// } else if (date.getDay() == 4) {
//     console.log("Today is Thusday");
// } else if (date.getDay() == 5) {
//     console.log("Today is Friday");
// } else if (date.getDay() == 6) {
//     console.log("Today is Saturday");
// }

//Date Print Projet Using Switch Statement Condition

switch(date.getDay()){
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thusday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Not a Valid Number");
}

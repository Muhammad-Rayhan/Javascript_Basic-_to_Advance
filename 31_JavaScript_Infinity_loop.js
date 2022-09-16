for(; ;){
    var number = Math.floor(Math.random() * 10 + 1);
    if (number == 9) {
        console.log("Winner Winner Checken Diner");
        break;
    } else {
        console.log("You Number is " + number);
    }
}
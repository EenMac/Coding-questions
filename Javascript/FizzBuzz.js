for(var number = 1; number <= 100; number ++){
    if (number % 3){
        console.log(number + " Fizz")
    }
    else if (number % 5){
        console.log(number +" Buzz")
    }
    else if(number % 3 && number % 5){
        console.log( number + " Fizzbuzz")
    }
    else
    {console.log(" Incorrect  number please try again")};

}
function oddEven(number){
    if (number % 2 == 0){
        return "even"
    } else{
        return "odd"
    }
}

console.log(oddEven(4646756778976))

function printOddsorEvens(number){
    var numbers = number;

    for (x = 1; x < number ; x++){
        for (var y = 1; y > x; y++){
        if (number % 2 == 0){
            return number + ": this number is even"
        }else{
            return number + ": this number is odd"
            }
        }
    }
}

printOddsorEvens(15)
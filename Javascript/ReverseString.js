function reverseNumber(number){
    num = number.toString()
    return num.split("").reverse().join("")
}
console.log(Number(reverseNumber(67776)))
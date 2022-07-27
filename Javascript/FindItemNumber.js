function findItemNumber(array, number){
    let count = 0;
    array.forEach(element => {
       if(element == number){
           count += 1;
       }
   });return count;
}


const array = [1, 5, 7, 9, 5, 4, 3, 5, 5];
console.log(findItemNumber(array, 5));

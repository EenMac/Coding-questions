const grades = [75, 56, 89, 100, 67, 90, 79, 56];

const calculateAverage = (array) => {
    let total = 0;
    for(let i = 0; i < array.length; i ++){
        total += array[i];
    }
    let average = total/array.length;
    return average;
}

console.log(calculateAverage(grades));


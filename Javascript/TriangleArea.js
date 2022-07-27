const side1 = 3;
const side2 = 4;
const side3 = 5;

const semiperimiter = (side1 + side2 + side3)/2
const Area = Math.sqrt(semiperimiter*((semiperimiter-side1)*(semiperimiter-side2)*(semiperimiter-side3)))
console.log(Area)

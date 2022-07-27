Grades = [['David', 60], ["Graham", 80], ["Sophie", 100], ['Greg', 50]];
meanGrade = 0;

for (i = 0; i < Grades.length; i++){
    meanGrade+= Grades[i][1]
    var average = meanGrade/Grades.length
}
console.log(meanGrade)

     if (meanGrade < 50){
         console.log("E")
     }else if(meanGrade < 60){
         console.log("D")
     }else if(meanGrade < 70){
         console.log("C")
     }else if (meanGrade < 80){
         console.log("B")
     }else if (meanGrade > 80){
         console.log("A")
     }
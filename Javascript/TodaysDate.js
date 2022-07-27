// Question: Print out todays date

var today = new Date();
var dd  = String(today.getDate()).padStart(2, "0")
var mm = String(today.getMonth()).padStart(2, "0")
var yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy
console.log(today)

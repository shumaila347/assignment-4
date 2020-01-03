var age = window.prompt("Enter Your Current Age ! ");

document.write("Your age is " + age + "<br>");

var year = new Date();
var currentYear = year.getFullYear();
var birthYear = currentYear - age ;

document.write("Your Birth Year is " + birthYear);
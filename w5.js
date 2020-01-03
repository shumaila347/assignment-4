
var number = parseFloat(window.prompt("Enter Number: "));
if (number < 0) 
{
	alert("Enter a positive number");
}

document.write("number: " + number + "<br>");
document.write("round off value: " + Math.round(number) + "<br>");
document.write("floor value: " + Math.floor(number) + "<br>");
document.write("ceil value: " + Math.ceil(number) + "<br>");

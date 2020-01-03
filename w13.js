var rightNow = new Date();
var dateString = rightNow.toString();
document.write("Current Date: "+ dateString + "<br>");

var date = new Date();
var currentMonth = date.getMonth();
var milliSeconds = date.getTime();
document.write("Elapsed milliSeconds since January 1, 1970: " + milliSeconds + "<br>");


var minutes = milliSeconds * 60 ;
document.write("Elapsed Minutes since January 1, 1970: " + minutes);
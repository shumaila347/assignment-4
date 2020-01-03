var rightNow = new Date();
document.write("Current Date: "+ rightNow.toString() + "<br>");
rightNow.setHours(rightNow.getHours() - 1);
document.write("1 hour ago, it was "+ rightNow.toString() + "<br>");
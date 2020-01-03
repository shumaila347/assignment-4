var message = "First fifteen days of the month" ;

var today = new Date();

if (today.getDate() < 16 ) {
  document.write(message);
} else {
  document.write("Last days of the month.");
}

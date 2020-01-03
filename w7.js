var temp = "The quick brown fox jumps over the lazy dog. ";
var count = (temp.match(/the/gi)).length;
document.write(temp);
document.write("<br>");
document.write("There are " + count + " occurrence(s) of word 'the' ");
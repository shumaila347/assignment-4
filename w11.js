function arrayMean(input){
    //Find the sum
    var sum = 0;
    for(var i in input) {
        sum += input[i];
    }
    var count = input.length;
    //Return the average / mean.
    return (sum / count);
}

var input = new Array(1, 2, 5, 20, 25);
var avg = arrayMean(input);
document.write(avg);

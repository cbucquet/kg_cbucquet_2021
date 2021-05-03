// Kargo online cosing assessement


// From a digit return the corresponding string
function digitToString(d) {
    switch(d) {
        case '0':
            return "Zero";
        case '1':
            return "One";
        case '2':
            return "Two";
        case '3':
            return "Three";
        case '4':
            return "Four";
        case '5':
            return "Five";
        case '6':
            return "Six";
        case '7':
            return "Seven";
        case '8':
            return "Eight";
        case '9':
            return "Nine";
        default:
            return "None";
    }
}

// Loop through the inputs and write out each number
var length = process.argv.length;
for(var i = 2; i < length; i++){
    var number = process.argv[i];
    for(var j = 0; j < number.length; j++){
        process.stdout.write(digitToString(number.charAt(j)));
    }
    if(i+1 < length){
        process.stdout.write(',');
    }
}

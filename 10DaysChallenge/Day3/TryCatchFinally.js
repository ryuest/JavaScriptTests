/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var splitString = s.split("");
        console.log("splitString ->  " + splitString)
        var reverseArray = splitString.reverse();
        console.log("reverseArray ->  " + reverseArray)
        var joinArray = reverseArray.join("");
        console.log(joinArray);
    }
    catch (error)
        {
            // Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
            console.log(error.message);
            console.log(s);
        }   
}

reverseString("end_begin")
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var sorted_array = nums.sort(function (a,b) {return a - b;});
    console.log("sorted_array   " + sorted_array)
    var unique_sorted_array = sorted_array.filter(function(elem, index, self) {
        console.log("self.indexOf(elem)   " + self.indexOf(elem))
        return index === self.indexOf(elem);
    })
    console.log("unique_sorted_array[unique_sorted_array.length - 2]   " + unique_sorted_array.length )
    return unique_sorted_array[unique_sorted_array.length - 2];
}

var nums = [9,3,6,7,5]
console.log(getSecondLargest(nums))
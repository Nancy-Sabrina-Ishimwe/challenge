//Write a function that sorts an array of numbers in ascending order

function sortArrange(arr){
    var sortArray = arr.sort((a,b) => (a-b));
    return sortArray;
}
console.log(sortArrange([1,2,3,4,5,6]) );
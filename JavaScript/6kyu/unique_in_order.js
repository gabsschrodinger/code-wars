/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements. */

var uniqueInOrder=function(iterable){
    arr = [...iterable];
    for(let i = 1; i < arr.length; i ++) {
      if(arr[i] === arr[i - 1]) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  }
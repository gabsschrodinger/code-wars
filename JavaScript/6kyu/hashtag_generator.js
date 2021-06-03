function generateHashtag (str) {
    if(str.search(/\S/) < 0) return false;
    arr = str.split(/\s+/);
    console.log(arr);
    output = "#";
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != "") output += arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    if(output.length > 140) return false;
    return output;
}
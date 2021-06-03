function toCamelCase(str) {
  arr = str.split(/[-._.]/);
  output = arr[0];
  for (let i = 1; i < arr.length; i++) {
    output += arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  return output;
}

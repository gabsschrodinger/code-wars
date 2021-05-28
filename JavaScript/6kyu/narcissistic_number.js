function narcissistic(value) {
  value_len = value.toString().length;
  arr = [];
  for (let i = 0; i < value_len; i++) {
    arr.push(Math.pow(parseInt(value.toString()[i]), value_len));
  }

  return value == arr.reduce((a, b) => a + b, 0);
}
var countBits = function(n) {
    return n.toString(2).split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
};
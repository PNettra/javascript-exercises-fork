const sumAll = (a, b) => {
    let sum = 0;

    if (a < 0 || b < 0 || parseInt(a) != a || parseInt(b) != b || typeof a == "string" || typeof b == "string") {
        return "ERROR";
    } else if (a < b) {
        for (i = a; i <= b; i++) {
            sum += i;
        }
    } else if (a > b) {
        for (i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        sum += (a + b);
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const palindromes = function(str) {
    let strippedStr = str.replace(/[^A-Za-z0-9]/g, '');
    let loweredStr = strippedStr.toLowerCase();
    let slicedStr = loweredStr.split('');
    // used slice instead of split initially
    // split already initializes an array in slicedStr; so pushing it to arr 
    // would just create one object (the array) in it

    let string = '';
    
    for (let i = 0; i < slicedStr.length; i++) {
        string += slicedStr[i];
    }

    let stringTwo = '';

    // hold i measurements to same standards as prior, just in reverse (so arr length - 1)
    for (let i = slicedStr.length - 1; i >= 0; i--) {
        stringTwo += slicedStr[i];
    }

    if (string == stringTwo) {
        return true;
    } else {
        return false;
    }




    // alternatively
    // Remove all non-alphanumeric characters and convert to lowercase
    // let strippedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Split into array of characters
    // let slicedStr = strippedStr.split('');

    // Join normally and reversed
    // let string = slicedStr.join('');
    // let stringTwo = slicedStr.reverse().join('');

    // return string === stringTwo;
};

// Do not edit below this line
module.exports = palindromes;

const reverseString = (string) => {
    let newString = "";
    
    // declare i since it's not just a number
    // start i from the last character (length - 1 since length starts from 0), 
    // then subtract i's position until it reaches 0 (the first letter)
    // returning i each time
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }

    return newString;
};

// alt method splits the string at each letter through "", allowing us to use array method reverse on it;
// we can then join it back at each letter through ""

// const reverseString = function (string) {
//   return string.split("").reverse().join("");
// };

// Do not edit below this line
module.exports = reverseString;

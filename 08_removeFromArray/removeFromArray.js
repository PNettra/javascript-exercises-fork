const removeFromArray = (array, ...other) => {
    let newArray = array.filter(item => !other.includes(item));

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

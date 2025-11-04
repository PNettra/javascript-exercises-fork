const getTheTitles = (books) => {
    let reduced = books.reduce((obj, key) => {
        obj.push(key.title);
        return obj;
    }, [])

    return reduced;
};

// alternatively, using MAP METHOD
// const getTheTitles = (books) => {
//   return books.map(book => book.title);
// };

// Do not edit below this line
module.exports = getTheTitles;

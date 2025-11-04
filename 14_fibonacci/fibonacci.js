const fibonacci = function(integer) {
    let parsedInt = parseInt(integer);
    
    if (parsedInt < 0) {
        return "OOPS";
    } else {
        let arr= [];

        for (i = 0; i <= parsedInt; i++) {
            if (i === 0 || i === 1) {
                arr.push(i);
            } else {
                arr.push(arr[i - 1] + arr[i - 2]);
            }
        }

        return arr[parsedInt];
    }
};

// const fibonacci = function(integer) {
//     let parsedInt = parseInt(integer);
    
//     if (parsedInt < 0) {
//         return "OOPS";
//     } else {
//         let arr = [0, 1];

//         for (i = 2; i <= parsedInt; i++) {
//               arr.reduce((obj, key) => {
//                   return obj + (obj[key - 1]                    + arr[key - 2]);
//                 });
                
//             }
//         }

//         return arr[parsedInt];
//     }

// Do not edit below this line
module.exports = fibonacci;

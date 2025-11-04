const findTheOldest = function(people) {
    function compareYears(a, b) {
        // use nullish coalescing operator '??' as a fallback for nonexistent deathyear
        // "if a.yearofdeath doesn't exist, adeathyear = 2025
        let aDeathYear = a.yearOfDeath ?? new Date().getFullYear();
        let bDeathYear = b.yearOfDeath ?? new Date().getFullYear();

        let aYears = aDeathYear - a.yearOfBirth;
        let bYears = bDeathYear - b.yearOfBirth;

        if (aYears < bYears) return 1;
        if (aYears == bYears) return 0;
        if (aYears > bYears) return -1;
    }

    let sortedYears = people.sort(compareYears);
    return sortedYears[0];
};

// Do not edit below this line
module.exports = findTheOldest;

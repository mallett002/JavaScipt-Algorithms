function swap(first, second, array) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
}

function getPermCount(number) {
    if (number === 1) return 1;
    let count = 1;

    for (let i = 2; i <= number; i++) {
        count *= i;
    }

    return count;
}

function isValidPerm(arr) {
    let isValid = true;

    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] === arr[i + 1]) isValid = false;
    }

    return isValid;
}

// Not getting enough validCounts for some reason...
module.exports = (input) => {
    const baseArr = input.split("");
    const itemCount = baseArr.length;
    const numberOfPerms = getPermCount(itemCount);
    let validCount = 0;
    
    let arrayToCheck = baseArr;
    let indicesToSwap = [0, 1];

    for (let numberOfChecks = 1; numberOfChecks <= numberOfPerms; numberOfChecks++) {
        const isValid = isValidPerm(arrayToCheck);
        console.log({arrayToCheck}, ' is valid: ', isValid);

        if (isValid) {
            validCount++;
        }

        // Keep swapping indices of array until reach number of checks
        // If reach end of array, go back to beginning
        if (indicesToSwap[1] === itemCount - 1 || numberOfChecks === 0) {
            indicesToSwap = [0, 1];
        } else {
            indicesToSwap[0]++;
            indicesToSwap[1]++; 
        }

        arrayToCheck = swap(indicesToSwap[0], indicesToSwap[1], arrayToCheck);
    }

    return validCount;
};

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

module.exports = (input) => {
    const baseArr = input.split("");
    const itemCount = baseArr.length;
    const numberOfPerms = getPermCount(itemCount);
    let validCount = 0;
    
    let arrayToCheck = baseArr;
    let indicesToSwap = [0, 1];

    for (let numberOfChecks = 0; numberOfChecks <= numberOfPerms; numberOfChecks++) {
        const isValid = isValidPerm(arrayToCheck);

        if (isValid) {
            validCount++;
        }

        // TODO: fix indicesToSwap
        // changing to 1, 2 instead of starting at 0, 1
        // This below is right, but need to make first check at 0, 1
        if (indicesToSwap[1] === itemCount - 1) {
            indicesToSwap = [0, 1];
        } else {
            indicesToSwap[0]++;
            indicesToSwap[1]++; 
        }

        console.log({indicesToSwap});
        arrayToCheck = swap(indicesToSwap[0], indicesToSwap[1], arrayToCheck);
        numberOfChecks++;
    }

    return validCount;
};

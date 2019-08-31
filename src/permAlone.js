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

// items: a, b, c (length 3)
// indexes: 0, 1, 2 
function isValidPerm(arr) {
    let isValid = true;

    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] === arr[i + 1]) isValid = false;
    }

    return isValid;
}

module.exports = (input) => {
    // 123, 213, 231, 
    // 321, 312, 132,


    // abcd, bacd, bcad, bcda, cbda, cdba, cdab, dcab, dacb, dabc, ...
    // 0,1   1,2   2,3   0,1    1,2   2,3   0,1,  1,2   2,3  0,1 ...

    // Compute number of combinations
    const baseArr = input.split("");
    const itemCount = baseArr.length;
    const numberOfPerms = getPermCount(itemCount);

    // keep updating arrangment of letters and incrementing a count
    // Once count reaches numberOfPerms stop.
    // swap function:
    // const swappedFirstAndSecond = swap(0, 1, baseArr);
    // continuously call swap, incrementing params until 2nd one is the last index of the array
    // swap(0, 1, baseArr), swap(1, 2, newArray), swap(2, 3, newArray), swap(0, 1, newArray)..
    // do that and incrementing count until === numberOfPerms. Then done building up perms.
    const baseArrIsValid = isValidPerm(baseArr);
    console.log({baseArr});
    console.log({baseArrIsValid});

};

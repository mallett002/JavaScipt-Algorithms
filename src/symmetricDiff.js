
function getItemsByCount(memo, item) {
    if (!memo.hasOwnProperty(item)) {
        memo[item] = 1;
    } else {
        memo[item] += 1;
    }
    return memo;
}

function getDifference(arrOne, arrTwo) {
    const itemCountOne = arrOne.reduce(getItemsByCount, {});
    const itemCountTwo = arrTwo.reduce(getItemsByCount, {});
    const longer = arrOne.length > arrTwo.length
        ? itemCountOne
        : itemCountTwo;
    const shorter = arrOne.length > arrTwo.length
        ? itemCountTwo
        : itemCountOne;

    const longersDiff = Object.keys(longer).reduce((memo, key) => {
        if (!shorter.hasOwnProperty(key) || longer[key] !== shorter[key]) {
            memo.push(parseInt(key));
        }
        return memo;
    }, []);

    const shortersDiff = Object.keys(shorter).reduce((memo, key) => {
        if (!longer.hasOwnProperty(key)) memo.push(parseInt(key));
        return memo;
    }, []);

    return longersDiff.concat(shortersDiff).sort();
}

function getSymDiff() {
    const argArray = Object.values(arguments);
    let difference = [];
    let alreadyCompared = argArray[0];

    argArray.forEach((val, i, array) => {
       if (i !== 0) {
           difference = getDifference(alreadyCompared, array[i]);
           alreadyCompared = difference;
       }
    });

    return difference;
}

module.exports = getSymDiff;

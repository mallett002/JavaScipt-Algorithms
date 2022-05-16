/*
* Takes in a target.
* Returns a list of numbers that sum up to the target.
* Returns an empty list if the target is 0.
* Returns null, if the numbers can not add up to the target.
* */

const howSum = (target, numbers, cache = {}) => {
    // base cases
    if (target in cache)  return cache[target];
    if (target === 0) return [];
    if (target < 0) return null;

    for (let n of numbers) {
        const remainder = target - n;
        const result = howSum(remainder, numbers, cache);

        if (result) {
            result.push(n);
            cache[target] = result;

            return cache[target];
        }
    }

    cache[target] = null;
    return null;
};

module.exports = howSum;

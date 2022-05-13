// Can Sum: See if a target can be achieved by summing numbers:
// recursively check if subtracting gets you to 0.
// use cache to improve performance
const canSum = (targetSum, numbers, cache = {}) => {
    if (targetSum in cache) return cache[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;

        if (canSum(remainder, numbers, cache)) {
            cache[targetSum] = true;
            return true;
        }
    }

    cache[targetSum] = false;
    return false;
};

module.exports = canSum;

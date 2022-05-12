// Can Sum: See if a target can be achieved by summing numbers:
const canSum = (targetSum, numbers) => {
    // Base cases
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    // Recursively call canSum for each number
    for (let num of numbers) {
        const remainder = targetSum - num; //

        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }

    return false;
};

module.exports = canSum;

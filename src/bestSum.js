const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombo = null;

    for (let num of numbers) {
        if (num === 0) continue;

        const remainder = targetSum - num;
        const remainderCombo = bestSum(remainder, numbers, memo);

        if (remainderCombo) {
            const combination = [...remainderCombo, num]; // use spread so we avoid mutating previous "remainderCombo" results

            if (!shortestCombo || combination.length < shortestCombo.length) { // set new shortest
                shortestCombo = combination;
            }
        }
    }

    memo[targetSum] = shortestCombo;

    return shortestCombo;
};

module.exports = bestSum;

const bestSum = (target, numbers) => {
    if (numbers.includes(target)) return [target];
    if (target === 0) return [];
    if (target < 0) return null;

    let shortestCombo = null;

    for (let num of numbers) {
        if (num === 0) continue;

        const remainder = target - num;
        const remainderCombo = bestSum(remainder, numbers);

        if (remainderCombo) {
            // compare remainderCombo with shortestCombo
            remainderCombo.push(num); // add the current num in there

            // compare
            if (!shortestCombo || remainderCombo.length < shortestCombo.length) {
                shortestCombo = remainderCombo;
            }
        }
    }

    return shortestCombo;
};

module.exports = bestSum;

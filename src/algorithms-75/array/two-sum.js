
const twoSumBruteForce = (nums, target) => {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if (i === j) {
                continue;
            }

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }   
    }

    return [];
};

const twoSumRecursion = (nums, target) => {
    if (target === 0) return [];

    // implement me :)
};

module.exports = {
    twoSum: twoSumBruteForce
};

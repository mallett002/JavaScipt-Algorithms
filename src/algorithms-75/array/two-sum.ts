// Returns the indexes of the nums in the list that add up to the target

export const twoSumBruteForce = (nums: number[], target: number): number[] => {
    for (let i = 0; i <= nums.length; i++) {                            // loop over nums
        for (let j = 0; j <= nums.length; j++) {                        // loop over it again (matrix)
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

// Keep map of {val: index}
// loop through
// if target - val (diff) is a key, we've found our 2 values that add up to the target
export const twoSum = (nums: number[], target: number): number[] => {
    const valToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (diff in valToIndex) { // If the difference was a previous val in the list, found 2 numbers (diff & nums[i])
            return [valToIndex[diff], i]; // return the indexes
        }

        valToIndex[nums[i]] = i; // Keep track of values already seen
    }

    return [];
};

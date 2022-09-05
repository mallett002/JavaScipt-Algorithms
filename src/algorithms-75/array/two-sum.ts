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
export const twoSumRecursion = (nums: number[], target: number): number[] => {
    const valToIndex = {}; // key value pairs that add up to the target

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (diff in valToIndex) { // if (target - val) is key in valToIndex; Already seen this diff, if seen twice, we have our 2 indexes.
            // return their 2 indexes:
            return [valToIndex[diff], i]; // return the other's index and this ones index
        }

        valToIndex[nums[i]] = i; // set currentVal: index
    }

    return [];
};

// if difference was a current val previously
/*
// {val: index}
{
    3: 0,
    2: 1,
    4: 2
}

// will return [1, 2]


if (target - nums[i] in hash) {
*/





export function lengthOfLIS(nums: number[]): number { // [1]
    const cache: number[] = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) cache[i] = 1;

        if (nums[i] < nums[i + 1]) {
            cache[i] = 1 + cache[i + 1];
        } else {
            cache[i] = 1;
        }
    }

    return Math.max(...cache);
} 


/*
[1, 2, 4, 3]
                            Start
                0         1       2         3
        
*/

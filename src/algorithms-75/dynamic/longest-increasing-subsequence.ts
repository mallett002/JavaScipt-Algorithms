



export function myFirstAttempt(nums: number[]): number { // [1]
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

// Fastest way to do this
export function lengthOfLIS(nums: number[]): number {
    let dp: number[] = []; // need to set every val to 1

    for (let i = nums.length - 1; i >= 0; i--) {
        dp[i] = 1; // initially set each cache value to one. Using it to compare

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                // Set to largest of: itself and 1 + value after it (1 + becuase we're including nums[i])
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }

    return Math.max(...dp);
}





/*
[1, 2, 4, 3]
                            Start
                0         1       2         3
        
*/

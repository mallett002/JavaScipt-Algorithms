export function lengthOfLIS(nums: number[]): number {
    if (nums.length === 1) return 1;

    if (nums.length === 2) {
        if (nums[0] < nums[1]) {
            return 2;
        }

        return 1;
    }

    let shortestSequence = nums;

    for (let i = 1; i < nums.length - 1; i++) {
        const current = nums[i];

        if (current >= nums[i - 1]) {
            shortestSequence = nums.slice(i);
        }
        if (current >= nums[i + 1]) {
            shortestSequence = nums.slice(i + 1);
        }

        lengthOfLIS(shortestSequence);
    }

    return shortestSequence.length;
} 

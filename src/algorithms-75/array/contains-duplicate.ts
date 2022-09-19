export const doContainsDuplicate = (nums: number[]): boolean =>
    new Set(nums).size !== nums.length;

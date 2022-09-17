// Time complexity O(n)
// spreading an array is linear

export const doContainsDuplicate = (nums: number[]): boolean => {
    const sansDupes = [...new Set(nums)];

    return sansDupes.length !== nums.length;
};

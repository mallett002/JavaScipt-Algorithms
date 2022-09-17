export const doContainsDuplicate = (nums: number[]): boolean => {
    for (let i = 0; i < nums.length - 1; i++) {
        const n = nums[i];
        const other = nums.slice(i + 1).find(same => n === same);

        if (other !== undefined) return true;
    }
    
    return false;
};

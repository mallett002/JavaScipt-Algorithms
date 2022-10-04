import {lengthOfLIS} from '../../../src/algorithms-75/dynamic/longest-increasing-subsequence';

describe('longest increasing subsequence', () => {
    // https://leetcode.com/problems/longest-increasing-subsequence/
    
    it('returns 4 when nums = [10,9,2,5,3,7,101,18]', () => {
        const nums = [10,9,2,5,3,7,101,18];

        const result = lengthOfLIS(nums);

        expect(result).toBe(4);
    });
    
    it('returns 4 when nums = [0,1,0,3,2,3]', () => {
        const nums = [0,1,0,3,2,3];

        const result = lengthOfLIS(nums);

        expect(result).toBe(4);
    });

    it('returns 1 when nums = [7,7,7,7,7,7,7]', () => {
        const nums = [7,7,7,7,7,7,7];

        const result = lengthOfLIS(nums);

        expect(result).toBe(1);
    });
});
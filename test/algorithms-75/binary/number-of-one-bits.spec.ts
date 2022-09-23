import {hammingWeight} from '../../../src/algorithms-75/binary/number-of-one-bits'

describe('hammingWeight', () => {
    // https://leetcode.com/problems/number-of-1-bits/
    it('should return 3 when given 00000000000000000000000000001011', () => {
        const result = hammingWeight(11);

        expect(result).toBe(3);
    });

    it('should return 1 when given 00000000000000000000000010000000', () => {
        const result = hammingWeight(128);

        expect(result).toBe(1);
    });

    it('should return 31 when given 11111111111111111111111111111101', () => {
        const result = hammingWeight(4294967293);

        expect(result).toBe(31);
    });
});
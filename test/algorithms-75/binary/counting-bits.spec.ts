import {countBits} from '../../../src/algorithms-75/binary/counting-bits';

describe('countBits', () => {
    // https://leetcode.com/problems/number-of-1-bits/
    it('should return [0,1,1] when given 2', () => {
        const result = countBits(2);

        expect(result).toBe([0,1,1]);
    });

    it('should return [0,1,1,2,1,2] when given 5', () => {
        const result = countBits(5);

        expect(result).toBe([0,1,1,2,1,2]);
    });
});
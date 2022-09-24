import {firstTryCountBits, bruteForce} from '../../../src/algorithms-75/binary/counting-bits';

describe('countBits', () => {
    // https://leetcode.com/problems/number-of-1-bits/
    it('should return [0,1,1] when given 3', () => {
        const result = bruteForce(3);

        expect(result).toStrictEqual([0, 1, 1, 2]);
    });

    it('should return [0,1,1,2,1,2] when given 5', () => {
        const result = bruteForce(5);

        expect(result).toStrictEqual([0,1,1,2,1,2]);
    });

    it('should return [0,1,1,2,1,2,2,3] when given 65', () => {
        const result = bruteForce(7);

        expect(result).toStrictEqual([0,1,1,2,1,2,2,3]);
    });
});
import {sumTwoIntegers} from '../../../src/algorithms-75/binary/sum-two-integers';

describe('sum two integers', () => {
    // https://leetcode.com/problems/sum-of-two-integers/
    it('should return 3 when given 1 and 2', () => {
        const result = sumTwoIntegers(1, 2);

        expect(result).toBe(3);
    });

    it('should return 5 when given 2 and 3', () => {
        const result = sumTwoIntegers(2, 3);

        expect(result).toBe(5);
    });
});
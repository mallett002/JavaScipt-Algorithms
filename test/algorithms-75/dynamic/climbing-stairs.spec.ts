import {climbStairs} from '../../../src/algorithms-75/dynamic/climbing-stairs';

describe('climbing-stairs', () => {
    // In how many distinct ways can you climb to the top?
    // https://leetcode.com/problems/climbing-stairs/
    it('should return 2 when given 2', () => {
        const result = climbStairs(2);

        expect(result).toBe(2);
    });
    
    it('should return 3 when given 3', () => {
        const result = climbStairs(3);

        expect(result).toBe(3);
    });

    it('should return 5 when given 4', () => {
        const result = climbStairs(4);

        expect(result).toBe(5);
    });

    it('should return 1134903170 when given 44', () => {
        const result = climbStairs(44);

        expect(result).toBe(1134903170);
    });
});
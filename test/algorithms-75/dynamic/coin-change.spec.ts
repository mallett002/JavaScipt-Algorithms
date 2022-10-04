import {retrieveFewestCoins, fastest} from '../../../src/algorithms-75/dynamic/coin-change';

describe('coin-change', () => {
    // Return fewest amount of coins it takes to get to the amount
    // https://leetcode.com/problems/coin-change/
    it('should return -1 when coins = [8], amount = 1', () => {
        const result = fastest([8], 1);

        expect(result).toBe(-1);
    });

    it('should return 1 when coins = [1], amount = 1', () => {
        const result = fastest([1], 1);

        expect(result).toBe(1);
    });
    
    it('should return 3 when coins = [1,2,5], amount = 3', () => {
        const result = fastest([1, 2, 5], 3);

        expect(result).toBe(2);
    });
    
    it('should return 3 when coins = [1,2,5], amount = 11', () => {
        const result = fastest([1, 2, 5], 11);

        expect(result).toBe(3);
    });
    
    it('should return -1 when coins = [2], amount = 3', () => {
        const result = fastest([2], 3);

        expect(result).toBe(-1);
    });

    it('should return 0 when coins = [1], amount = 0', () => {
        const result = fastest([1], 0);

        expect(result).toBe(0);
    });
});

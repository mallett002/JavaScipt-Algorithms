import {retrieveFewestCoins} from '../../../src/algorithms-75/dynamic/coin-change';

describe('coin-change', () => {
    // In how many distinct ways can you climb to the top?
    // https://leetcode.com/problems/coin-change/
    it('should return 3 when coins = [1,2,5], amount = 11', () => {
        const result = retrieveFewestCoins([1, 2, 5], 11);

        expect(result).toBe(3);
    });
    
    it('should return -1 when coins = [2], amount = 3', () => {
        const result = retrieveFewestCoins([2], 3);

        expect(result).toBe(-1);
    });

    it('should return 0 when coins = [1], amount = 0', () => {
        const result = retrieveFewestCoins([1], 0);

        expect(result).toBe(0);
    });
});
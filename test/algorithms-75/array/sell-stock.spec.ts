import {maxProfit} from '../../../src/algorithms-75/array/sell-stock';

describe('maxProfit', () => {
    // Pick 1 day to buy and one day to sell that will give you the maximum profit
    // Return the profit that you made
    // If don't make a profit, return 0
    test('when [7,1,5,3,6,4], returns 5', () => {
        const prices = [7,1,5,3,6,4];

        const result = maxProfit(prices);

        expect(result).toStrictEqual(5);
    });
    
    test('when [7,6,4,3,1], returns 0', () => {
        const prices = [7,6,4,3,1];

        const result = maxProfit(prices);

        expect(result).toStrictEqual(0);
    });
    
    test('when [2,4,1], returns 2', () => {
        const prices = [2,4,1];

        const result = maxProfit(prices);

        expect(result).toStrictEqual(2);
    });
});


import { maxProfit } from '../../../src/algorithms-75/array/sell-stock';

describe('maxProfit', () => {
    // Pick 1 day to buy and one day to sell that will give you the maximum profit
    // Return the profit that you made
    // If don't make a profit, return 0
    test('when [7,1,5,3,6,4], returns 5', () => {
        const prices = [7, 1, 5, 3, 6, 4];

        const result = maxProfit(prices);

        expect(result).toStrictEqual(5);
    });

    test('when [7,6,4,3,1], returns 0', () => {
        const prices = [7, 6, 4, 3, 1];

        const result = maxProfit(prices);

        expect(result).toStrictEqual(0);
    });

    test('when [2,4,1], returns 2', () => {
        const prices = [2, 4, 1];

        const result = maxProfit(prices);

        expect(result).toStrictEqual(2);
    });

    test('when large input', () => {
        const prices = [ 886, 729, 539, 474, 5, 653, 588, 198, 313, 111, 38, 808, 848, 364, 819, 747, 520, 568, 583, 253, 605, 442, 779, 903, 217, 284, 927, 33, 859, 75, 418, 612, 174, 316, 167, 40, 945, 740, 174, 279, 985, 133, 38, 919, 528, 844, 101, 291, 673, 561, 244, 827, 602, 58, 777, 625, 95, 563, 102, 400, 921, 988, 472, 629, 781, 215, 7, 131, 220, 147, 841, 511, 201, 558, 435, 802, 995, 514, 83, 618, 399, 542, 352, 34, 943, 983, 498, 20, 235, 156, 768, 237, 828, 41, 205, 188, 229, 307, 514, 548, 827, 369, 381, 202, 498, 27, 948, 118, 696, 355, 929, 148, 348, 383, 472, 125, 916, 639, 801, 775, 285, 38, 70, 117, 725, 35, 162, 586, 329, 540, 482, 148, 113, 317, 732, 115, 715, 119, 891, 161, 338, 939, 412, 615, 304, 511, 604, 969, 912, 729, ];
        const result = maxProfit(prices);

        expect(result).toStrictEqual(1);
    });
});


import {bestSum} from '../src/bestSum';

describe('bestSum function', () => {
    test('returns the target when it is in the list of numbers', () => {
        const target = 7;
        const items = [5, 3, 4, 7];

        const actual = bestSum(target, items);

        expect(actual).toStrictEqual([7]);
    });

    test('returns the shortest list of numbers that reach the target', () => {
        const target = 8;
        const items = [2, 3, 5];

        const actual = bestSum(target, items);

        expect(actual).toStrictEqual([5, 3]);
    });

    test('returns null if the numbers can not add up to the target', () => {
        const target = 8;
        const items = [0, 9];

        const actual = bestSum(target, items);

        expect(actual).toBeNull();
    });

    test('returns the shortest list, even when it is the same number repeated', () => {
        const target = 8;
        const items = [1, 4, 5];

        const actual = bestSum(target, items);

        expect(actual).toStrictEqual([4, 4]);
    });

    test('is able to handle large inputs', () => {
        const target = 100;
        const items = [1, 2, 5, 25];

        const actual = bestSum(target, items);

        expect(actual).toStrictEqual([25, 25, 25, 25]);
    });
});

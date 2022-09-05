import {twoSumBruteForce} from '../../../src/algorithms-75/array/two-sum';

describe('twoSum function', () => {
    test('when [2,7], target = 0, returns []', () => {
        const target = 0;
        const items = [2,7];

        const actual = twoSumBruteForce(items, target);

        expect(actual).toStrictEqual([]);
    });

    test('when [2,7,11,15], target = 9, returns [0, 1]', () => {
        const target = 9;
        const items = [2,7,11,15];

        const actual = twoSumBruteForce(items, target);

        expect(actual).toStrictEqual([0, 1]);
    });

    test('when [3,2,4], target = 6, returns [1, 2]', () => {
        const target = 6;
        const items = [3, 2, 4];

        const actual = twoSumBruteForce(items, target);

        expect(actual).toStrictEqual([1, 2]);
    });

    test('when nums = [3,3], target = 6, returns [0, 1]', () => {
        const target = 6;
        const items = [3, 3];

        const actual = twoSumBruteForce(items, target);

        expect(actual).toStrictEqual([0, 1]);
    });
});

import {canSum} from '../src/canSum';

describe('canSum function', () => {
    it('returns false when not able to sum to the target', () => {
        const target = 7;
        const items = [2, 4];

        const actual = canSum(target, items);

        expect(actual).toBe(false);
    });

    it('returns true when able to sum to the target', () => {
        const target = 7;
        const items = [4, 3];

        const actual = canSum(target, items);

        expect(actual).toBe(true);
    });

    it('returns true with more items', () => {
        const target = 7;
        const items = [5, 3, 4, 7];

        const actual = canSum(target, items);

        expect(actual).toBe(true);
    });

    it('returns true with even more items', () => {
        const target = 8;
        const items = [2, 3, 5];

        const actual = canSum(target, items);

        expect(actual).toBe(true);
    });

    it('handles large numbers', () => {
        const target = 300;
        const items = [7, 14];

        const actual = canSum(target, items);

        expect(actual).toBe(false);
    });
});

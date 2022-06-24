const doTheThing = require('../src/doTheThing');

describe('doTheThing function', () => {
    test('returns the target when it is in the list of numbers', () => {
        const target = 7;
        const items = [5, 3, 4, 7];

        const actual = doTheThing(target, items);

        expect(actual).toStrictEqual([7]);
    });
});

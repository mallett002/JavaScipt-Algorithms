const canConstruct = require('../src/canConstruct');

describe('canConstruct function', () => {
    test('returns true if it can construct the target', () => {
        const target = 'hi';
        const wordBank = ['a', 'h', 'b', 'i'];

        const actual = canConstruct(target, wordBank);

        expect(actual).toBeTruthy();
    });

    test('returns true if target is an empty string', () => {
        const target = '';
        const wordBank = ['a', 'h', 'b', 'i'];

        const actual = canConstruct(target, wordBank);

        expect(actual).toBeTruthy();
    });

    test('returns false target can not be created', () => {
        const target = 'boop';
        const wordBank = ['bo', 'p', 'poo', 'oop'];

        const actual = canConstruct(target, wordBank);

        expect(actual).toBeFalsy();
    });
});

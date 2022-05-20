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

    test('returns true with larger wordBank pieces', () => {
        const target = 'abcdef';
        const wordBank = ['ab', 'abc', 'cd', 'def', 'abcd'];

        const start = performance.now();
        const actual = canConstruct(target, wordBank);
        console.log(performance.now() - start);

        expect(actual).toBeTruthy();
    });

    test('handles large inputs', () => {
        const target = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef';
        const wordBank = [
            'e',
            'ee',
            'eee',
            'eeee',
            'eeeee',
            'eeeeee',
            'eeeeeee'
        ];

        const start = performance.now();
        const actual = canConstruct(target, wordBank);
        console.log(performance.now() - start);

        expect(actual).toBeTruthy();
    });
});

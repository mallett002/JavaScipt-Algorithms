import {canConstruct} from '../src/canConstruct';

describe('canConstruct function', () => {
    test('returns true if it can construct the target', () => {
        const target = 'hi';
        const wordBank = ['a', 'h', 'b', 'i'];

        const actual = canConstruct(target, wordBank);

        expect(actual).toBe(true);
    });

    test('returns true if target is an empty string', () => {
        const target = '';
        const wordBank = ['a', 'h', 'b', 'i'];

        const actual = canConstruct(target, wordBank);

        expect(actual).toBe(true);
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

        const actual = canConstruct(target, wordBank);

        expect(actual).toBe(true);
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

        const actual = canConstruct(target, wordBank);

        expect(actual).toBe(true);
    });
});

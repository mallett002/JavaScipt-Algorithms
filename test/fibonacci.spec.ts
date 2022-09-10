import {fib} from '../src/fibonacci';

describe('fib function', () => {
    test('returns 0 given 0', () => {
        const number = 0;

        const result = fib(number);

        expect(result).toBe(0);
    });

    test('returns 1 given 2', () => {
        const number = 2;

        const result = fib(number);

        expect(result).toBe(1);
    });

    test('returns 2 given 3', () => {
        const number = 3;

        const result = fib(number);

        expect(result).toBe(2);
    });

    test('returns 3 given 4', () => {
        const number = 3;

        const result = fib(number);

        expect(result).toBe(2);
    });

    test('returns 55 given 10', () => {
        const number = 10;

        const result = fib(number);

        expect(result).toBe(55);
    });

    test('returns 143 given 12', () => {
        const number = 12;

        const result = fib(number);

        expect(result).toBe(144);
    });
});

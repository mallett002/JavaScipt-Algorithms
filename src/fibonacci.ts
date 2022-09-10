// Returns the nth number at the that spot in the fibanacci sequence, not counting 0
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
export const fib = (n: number): number => {
    if (n < 1) return 0;
    if (n === 1) return 1;

    return fib(n - 2) + fib(n - 1);
};
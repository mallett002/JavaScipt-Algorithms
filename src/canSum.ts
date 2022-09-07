// Can Sum: See if a target can be achieved by summing numbers:
// recursively check if subtracting gets you to 0.
// use cache to improve performance
interface ICache {
    number?: boolean
}

export const canSum = (targetSum: number, numbers: number[], cache: ICache = {}): boolean => {
    if (targetSum in cache) return cache[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    
    for (const num of numbers) {
        const difference = targetSum - num;

        if (canSum(difference, numbers, cache)) {
            cache[difference] = true;

            return true;
        }
    }

    cache[targetSum] = false;

    return false;
};

/*
* Takes in a target.
* Returns a list of numbers that sum up to the target.
* Returns an empty list if the target is 0.
* Returns null, if the numbers can not add up to the target.
* */
type nullableNumbers = number[] | null;

interface ICache {
    number?: number[]
}

export const howSum = (target: number, numbers: number[], cache: ICache = {}): nullableNumbers => {
    if (target in cache) return cache[target];
    if (target === 0) return [];
    if (target < 0) return null;

    for (let num of numbers) {
        const diff = target - num;
        const result: nullableNumbers = howSum(diff, numbers, cache);

        if (result) {
            result.push(num);
            cache[target] = result;

            return result;
        }
    }

    cache[target] = null;

    return null;
};

import {doContainsDuplicate} from '../../../src/algorithms-75/array/contains-duplicate';
import bigDataPrices from '../../../data-sets/profits.json';

const removeDupes = (items: number[]): number[] => {
    return items.filter((curr: number, i: number) => {
        const rest = items.slice(i + 1);

        if (rest.find((item: number) => item === curr)) {
            return false;
        }

        return true;
    });
};

describe('contains duplicate', () => {
    // If any number is in there twice, returns false, otherwise it's true    
    test('when [1,2,3,1], returns true', () => {
        const nums = [1,2,3,1];

        const result = doContainsDuplicate(nums);

        expect(result).toBe(true);
    });

    test('when [1,2,3,4], returns false', () => {
        const nums = [1,2,3,4];

        const result = doContainsDuplicate(nums);

        expect(result).toBe(false);
    });

    test('when [1,1,1,3,3,4,3,2,4,2], returns true', () => {
        const nums = [1,1,1,3,3,4,3,2,4,2];

        const result = doContainsDuplicate(nums);

        expect(result).toBe(true);
    });

    test('when [0,4,5,0,3,6], returns true', () => {
        const nums = [0,4,5,0,3,6];

        const result = doContainsDuplicate(nums);

        expect(result).toBe(true);
    });

    test('when given large amount of nums with dupes, returns true', () => {
        const result = doContainsDuplicate(bigDataPrices);

        expect(result).toBe(true);
    });

    test('when given large amount of nums sans dupes, returns false', () => {
        const pricesSansDupes = removeDupes(bigDataPrices);
        
        const result = doContainsDuplicate(pricesSansDupes);

        expect(result).toBe(false);
    });

    test('playin', () => {
        const zero = 0;

        if (zero?.toString()) {
            console.log('yes...');
        } else {
            console.log('falsy...');
            
        }
    });
}); 
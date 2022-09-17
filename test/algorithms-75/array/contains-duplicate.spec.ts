import {doContainsDuplicate} from '../../../src/algorithms-75/array/contains-duplicate';
import bigDataPrices from '../../../data-sets/profits.json';

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
        const pricesSansDupes = [...new Set(bigDataPrices)];;
        
        const result = doContainsDuplicate(pricesSansDupes);

        expect(result).toBe(false);
    });
}); 
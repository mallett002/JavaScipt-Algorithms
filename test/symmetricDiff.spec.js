const {expect} = require('chai');
const getSymDiff = require('../src/symmetricDiff');

describe('symmetricDiff function', () => {
    it('should filter the arrays', () => {
        const argOne = [1, 2, 3, 3];
        const argTwo = [5, 2, 1, 4];

        const actual = getSymDiff(argOne, argTwo);
        const expectedResult =  [3, 4, 5];

        expect(actual).to.deep.equal(expectedResult);
    });

    it('should filter the arrays', () => {
        const argOne = [1, 2, 5];
        const argTwo = [2, 3, 5];
        const argThree = [3, 4, 5];

        const actual = getSymDiff(argOne, argTwo, argThree);
        const expectedResult =  [1, 4, 5];

        expect(actual).to.deep.equal(expectedResult);
    });
});






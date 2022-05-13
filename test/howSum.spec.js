const {expect} = require('chai');
const howSum = require('../src/howSum');

describe('howSum function', () => {
    it('returns null when not able to sum to the target', () => {
        const target = 7;
        const items = [2, 4];

        const actual = howSum(target, items);

        expect(actual).to.be.null;
    });

    it('returns a list of numbers that sum to the target', () => {
        const target = 7;
        const items = [4, 3];

        const actual = howSum(target, items);

        expect(actual).to.have.members([3, 4]);
    });

    it('returns a list of one combination if there are several', () => {
        const target = 7;
        const items = [5, 3, 4, 7];

        const actual = howSum(target, items);

        expect(actual).to.have.members([3, 4]);
    });

    it('returns an empty list if the target sum is zero', () => {
        const target = 0;
        const items = [5, 3, 4, 7];

        const actual = howSum(target, items);

        expect(actual).to.have.members([]);
    });

    it('handles large numbers', () => {
        const target = 300;
        const items = [7, 14];

        const actual = howSum(target, items);

        expect(actual).to.be.null;
    });
});

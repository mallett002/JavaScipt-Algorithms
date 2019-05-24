const {expect} = require('chai');
const inventoryUpdate = require('../src/inventoryUpdate');

describe('inventoryUpdate function', () => {
    it('updates the inventory', () => {
        // given
        const currentInv = [
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"]];
        const newInv = [];
        const expected = [
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"]
        ];

        // when
        const actual = inventoryUpdate(currentInv, newInv);

        // then
        expect(actual).to.deep.equal(expected);
    });

    it('updates the inventory', () => {
        // given
        const currentInv = [];
        const newInv = [
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [67, "Bowling Ball"],
            [7, "Toothpaste"]
        ];
        const expected = [
            [67, "Bowling Ball"],
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [7, "Toothpaste"]
        ];

        // when
        const actual = inventoryUpdate(currentInv, newInv);

        // then
        expect(actual).to.deep.equal(expected);
    });

    it('updates the inventory', () => {
        // given
        const currentInv = [
            [0, "Bowling Ball"],
            [0, "Dirty Sock"],
            [0, "Hair Pin"],
            [0, "Microphone"]
        ];
        const newInv =[
            [1, "Hair Pin"],
            [1, "Half-Eaten Apple"],
            [1, "Bowling Ball"],
            [1, "Toothpaste"]
        ];
        const expected = [
            [1, "Bowling Ball"],
            [0, "Dirty Sock"],
            [1, "Hair Pin"],
            [1, "Half-Eaten Apple"],
            [0, "Microphone"],
            [1, "Toothpaste"]
        ];

        // when
        const actual = inventoryUpdate(currentInv, newInv);

        // then
        expect(actual).to.deep.equal(expected);
    });

});

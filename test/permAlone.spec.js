const {expect} = require('chai');
const permAlone = require('../src/permAlone');

describe('Perm Alone', () => {
    describe('should return number of non-repeating letters', () => {
        it('aab should be 2', () => {
            // given
            const str = 'aba';

            // when
            const result = permAlone(str);

            // then
            expect(result).to.equal(2);
        });
    });


});
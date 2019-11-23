const {expect} = require('chai');
const permAlone = require('../src/permAlone');

describe('Perm Alone', () => {
    describe('returns number of permutations with non-repeating letters', () => {
        it('should be 2 when given aba', () => {
            // given
            const str = 'aba';

            // when
            const result = permAlone(str);

            // then
            expect(result).to.equal(2);
        });

        it('should be 0 when given aaa', () => {
            // given
            const str = 'aaa';

            // when
            const result = permAlone(str);

            // then
            expect(result).to.equal(0);
        });

        it('should be 12 when given aaabb', () => {
            // given
            const str = 'aaabb';

            // when
            const result = permAlone(str);

            // then
            expect(result).to.equal(12);
        });

        it('should be 3600 when given abcdefa', () => {
            // given
            const str = 'abcdefa';

            // when
            const result = permAlone(str);

            // then
            expect(result).to.equal(3600);
        });
    });


});
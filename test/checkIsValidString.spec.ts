import {verifyValid} from '../src/checkIsValidString';

describe('verifyValid function', () => {
    it('returns true when empty str', () => {
        const input = '';

        const actual = verifyValid(input);

        expect(actual).toBe(true);
    });

    it('returns true when ()', () => {
        const input = '()';

        const actual = verifyValid(input);

        expect(actual).toBe(true);
    });

    it('returns false with (]', () => {
        const input = '(]';

        const actual = verifyValid(input);

        expect(actual).toBe(false);
    });

    it('returns true with ()[]', () => {
        const input = '()[]';

        const actual = verifyValid(input);

        expect(actual).toBe(true);
    });

    it('returns true with ([])', () => {
        const input = '([])';

        const actual = verifyValid(input);

        expect(actual).toBe(true);
    });

    it('returns false with ([})', () => {
        const input = '([})';

        const actual = verifyValid(input);

        expect(actual).toBe(false);
    });

    it('returns true with ({()})', () => {
        const input = '({()})';

        const actual = verifyValid(input);

        expect(actual).toBe(true);
    });

    it('returns true with ({()})', () => {
        const input = '({()})';

        const actual = verifyValid(input);

        expect(actual).toBe(true);
    });
});

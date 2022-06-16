const matches = {
    '(': ')',
    '[': ']',
    '{': '}',
};

const removeAtIndex = (str, index) => {
    const arr = str.split('');

    arr.splice(index, 2);

    const joined = arr.join('');

    return joined;
};

const checkIsValidString = (input) => {
    if (!input.length) return true;
    if (input.length % 2 !== 0) {
        console.log('input length: ', input.length);
        return false;
    }

    for (let i = 0; i < input.length; i++) {
        if (input.length && input[i + 1] === matches[input[i]] && input[i + 1] !== undefined) {
            const newStr = removeAtIndex(input, i);

            return checkIsValidString(newStr);
        }
    }

    return false;
};

console.log('got:', checkIsValidString(''), '; expected: ', true);
console.log('got:', checkIsValidString('()'), '; expected: ', true);
console.log('got:', checkIsValidString('(]'), '; expected: ', false);
console.log('got:', checkIsValidString('()[]'), '; expected: ', true);
console.log('got:', checkIsValidString('([])'), '; expected: ', true);
console.log('got:', checkIsValidString('([})'), '; expected: ', false);
console.log('got:', checkIsValidString('({()})'), '; expected: ', true);

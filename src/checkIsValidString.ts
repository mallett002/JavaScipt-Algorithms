interface IMemo {
    string?: boolean
}

const matches = {
    '(': ')',
    '{': '}',
    '[': ']'
};

export const verifyValid = (input: string, memo: IMemo = {}): boolean => {
    if (input in memo) return memo[input];
    if (input === '') return true;

    for (let i = 0; i < input.length - 1; i++) {
        if (input[i + 1] === matches[input[i]]) {
            const newInput = input.replace(`${input[i]}${input[i+1]}`, '');
            
            if (verifyValid(newInput, memo)) {
                memo[input] = true;

                return true;
            }
        }
    }

    memo[input] = false;

    return false;
};

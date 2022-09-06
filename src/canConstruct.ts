interface IMemo {
    string?: boolean
}

export const canConstruct = (target: string, wordBank: string[], memo: IMemo = {}): boolean => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        // make sure it's a prefix (starts at index 0 of the target)
            // if it is, call canConstruct on it and get the value, return at end
        if (target.indexOf(word) === 0) {
            // take off the prefix, and pass the next piece to canConstruct
            const suffix = target.slice(word.length); // ex: 'howdy'.slice('how'.length) => returns 'dy'

            if (canConstruct(suffix, wordBank, memo)) { // if you find one, return true early, otherwise don't return until outside the loop
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = true;

    return false;
};

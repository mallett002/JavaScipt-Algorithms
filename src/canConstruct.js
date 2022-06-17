const canConstruct = (target, wordBank) => {
    if (target === '') return true; // base case, empty string means you can safely use the wordBank to "delete" the chars.

    for (let word of wordBank) {
        // make sure it's a prefix (starts at index 0 of the target)
            // if it is, call canConstruct on it and get the value, return at end
        if (target.indexOf(word) === 0) {
            // take off the prefix, and pass the next piece to canConstruct
            const suffix = target.slice(word.length); // ex: 'howdy'.slice('how'.length) => returns 'dy'

            if (canConstruct(suffix, wordBank)) { // if you find one, return true early, otherwise don't return until outside the loop
                return true;
            }
        }
    }

    return false;
};

module.exports = canConstruct;
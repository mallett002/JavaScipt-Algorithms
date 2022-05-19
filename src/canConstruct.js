const canConstruct = (target, wordBank) => {
    if (target === '') return true;

    for (let char of wordBank) {
        const reg = new RegExp(char);

        if (reg.test(target)) {
            const newTarget = target.replace(reg, '');

            return canConstruct(newTarget, wordBank);
        }
    }

    return false;
};

module.exports = canConstruct;

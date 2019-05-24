module.exports = function updateInventory(curInv, newInv) {
    if (!newInv.length) return curInv;

    // Create inventory object
    let itemsByName = curInv.reduce((memo, curr) => {
        memo[curr[1]] = curr[0];
        return memo;
    }, {});

    // for each item in newInv, add it to itemsByName
    newInv.forEach(([count, name]) => {
        if (itemsByName[name]) {
            itemsByName[name] += count;
        } else {
            itemsByName[name] = count;
        }
    });

    // turnItemsByName into array of arrays & return it
    return Object.keys(itemsByName).map(item => {
        return [itemsByName[item], item];
    })
        .sort(([firstCount, firstName], [secondCount, secondName]) => {
            return firstName > secondName ? 1 : -1;
        });
};

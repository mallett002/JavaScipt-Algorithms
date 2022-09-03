// Return the shortest list of numbers that add up to the target sum
// loop over numbers, keeping track of shortest list, if new list is shorter, set that to be the new shortest list
// if the shortest list was never reasigned, it will be null (no numbers added up to the target)
const bestSum = (targetSum, numbers, memo = {}) => {
   if (targetSum in memo) return memo[targetSum];
   if (targetSum === 0) return [];
   if (targetSum < 0) return null;

   let shortestCombo = null;

   for (const number of numbers) {
      if (number === 0) continue;

      const diff = targetSum - number;
      const result = bestSum(diff, numbers, memo);

      if (result) {
         const newCombo = [...result, number];

         if (!shortestCombo || shortestCombo && newCombo.length < shortestCombo.length) {
            shortestCombo = [...newCombo];
         }
      }

   }

   memo[targetSum] = shortestCombo;

   return shortestCombo;
};

module.exports = bestSum;

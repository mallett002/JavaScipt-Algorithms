// Return the shortest list of numbers that add up to the target sum
// loop over numbers, keeping track of shortest list, if new list is shorter, set that to be the new shortest list
// if the shortest list was never reasigned, it will be null (no numbers added up to the target)
interface Imemo {
   number?: boolean
}

export const bestSum = (targetSum: number, numbers: number[], memo: Imemo = {}) => {
   if (targetSum in memo) return memo[targetSum];
   if (targetSum === 0) return [];
   if (targetSum < 0) return null;

   let shortestCombo: number[] | null = null;

   for (const num of numbers) {
      if (num === 0) continue;

      const diff = targetSum - num;
      const result = bestSum(diff, numbers, memo);

      if (result) {
         const newCombo = [...result, num];

         if (!shortestCombo || shortestCombo && newCombo.length < shortestCombo.length) {
            shortestCombo = [...newCombo];
         }
      }

   }

   memo[targetSum] = shortestCombo;

   return shortestCombo;
};

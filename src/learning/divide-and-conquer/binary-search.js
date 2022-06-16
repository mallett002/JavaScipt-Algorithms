// Binary Search: Return the index of the target
// Steps:
// make a mid
// check if target is at mid
// if it is, return it
// if it's not, check to see if it's greater
// if it's greater, search the right side of the array
// if it's less, search the left side of the array
const binarySearch = (arr, target, low, high) => {
    if (high >= low) { // Make sure we don't set high below the low
        const mid = Math.ceil((low + high) / 2); // Find the mid. Round up decimals

        if (target === arr[mid]) return mid;

        if (target > arr[mid]) { // if target is greater than mid, search right side
            const newLow = mid + 1; // Search the right side (Set low to be the lowest right side

            return binarySearch(arr, target, newLow, high);
        }

        if (target < arr[mid]) { // if it's lower than mid, search left side
            const newHigh = mid - 1; // Set the new high to be one less than mid to search left side

            return binarySearch(arr, target, low, newHigh);
        }
    }

    return -1;
};

console.log(binarySearch([3, 4, 5, 6, 7, 8, 9], 4, 0, 6), ' expected: 1');
console.log(binarySearch([3, 4, 5, 6, 7, 8, 9], 2, 0, 6), ' expected: -1'); // -1 if not in the array


/* ============================ Time & space complexity ============================*/
// O(log n)  =>  worse and average case
// O(1)      =>  Best case (If finds it right away)
/*
[3, 4, 5, 6, 7, 8, 9] searching for 9. Divides in half: (Step 1)
[7, 8, 9] in half again: (Step 2)
[8, 9] and again: (Step 3)
[9] found it at the last index

log2(8) = 3

# of Steps = (Height of the tree) - (1)
*/

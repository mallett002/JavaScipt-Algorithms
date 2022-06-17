const merge = (arr, start, mid, end) => {
    // 1. Copy left and right half of arr into separate arrays
    let leftHalf = [];
    let rightHalf = [];

    let current = start;
    let leftIndex = 0;
    let rightIndex = 0;

    // Copy left half of arr into "leftHalf" array
    for (leftIndex; current <= mid; leftIndex++, current++) {
        leftHalf[leftIndex] = arr[current];
    }

    // Copy right half of arr into "rightHalf" array
    for (rightIndex; current <= end; rightIndex++, current++) {
        rightHalf[rightIndex] = arr[current];
    }

    // 2. Compare elements in left and right and put lower back into array
    current = start;
    leftIndex = 0;
    rightIndex = 0;

    // Compare and copy over lower number from leftHalf or rightHalf into arr
    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
        if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
            arr[current] = leftHalf[leftIndex];
            leftIndex++;
        } else {
            arr[current] = rightHalf[rightIndex];
            rightIndex++;
        }

        current++;
    }

    // When either leftHalf or rightHalf is empty, copy remaining subarray into array
    while (leftIndex < leftHalf.length) {
        arr[current] = leftHalf[leftIndex];
        leftIndex++;
        current++;
    }
    while (rightIndex < rightHalf.length) {
        arr[current] = rightHalf[rightIndex];
        rightIndex++;
        current++;
    }
}

const mergeSort = (arr, start, end) => {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);

        mergeSort(arr, start, mid); // sort left
        mergeSort(arr, mid + 1, end); // sort right
        merge(arr, start, mid, end); // combine them
    }
};

const unsorted = [3, 2, 1];

mergeSort(unsorted, 0, unsorted.length - 1);

/* =================== BigO ===================
The big o of merge sort is the total cost of splitting (log n) plus the total cost of merging (n * log n)
Since we only care about the greatest exponent we can say it's just n * log n
* */

// Another way
function sort(l1, l2) {
    const sorted = [];

    while (l1.length && l2.length) {
        sorted.push(l1[0] > l2[0] ? l2.shift() : l1.shift());
    }

    while (l1.length) {
        sorted.push(l1.shift())
    }
    while (l2.length) {
        sorted.push(l2.shift())
    }

    return sorted;
}

function mergeSort2(list) {
    if (list.length < 2) return list;

    const mid = Math.floor((list.length / 2));
    const l1 = list.slice(0, mid);
    const l2 = list.slice(mid, list.length);

    const sortedL1 = mergeSort2(l1);
    const sortedL2 = mergeSort2(l2);

    return sort(sortedL1, sortedL2);
}

const unsorted2 = [3, 2, 1, 9, 6, 7, 10];
const result = mergeSort2(unsorted2);
console.log(result);

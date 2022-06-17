
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

const unsorted = [4, 1, 8, 3, 9, 3, 2, 6, 5];

mergeSort(unsorted, 0, unsorted.length - 1);

function quickSort(arr) {
    const pivot = arr[arr.length - 1];
    let greaterIndex;

    for (let i = 0; i < arr.length; i++) {
        if (!greaterIndex && arr[i] > pivot) {
            greaterIndex = i;
            break;
        }
    }
}

const items = [4, 9, 2, 1];

const result = quickSort(items);
console.log({result});

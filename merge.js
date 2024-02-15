

let array = [];

function generateArray() {
    array = [];
    const arrayContainer = document.getElementById('array-container');
    arrayContainer.innerHTML = '';
    var n = document.getElementById("size").value;
    for (let i = 0; i < n; i++) {
        const value = Math.floor(Math.random() * 300) + 10;
        const bar = document.createElement('div');
        bar.style.height = `${value}px`;
        bar.className = 'bar';
        const barLabel = document.createElement("label");
        bar.appendChild(barLabel);
        arrayContainer.appendChild(bar);
        array.push(value);
    }
}

function resetArray() {
    generateArray();
}

function mergeSort() {
    array = mergeSortAlgorithm(array);
    visualizeSort();
}

function mergeSortAlgorithm(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSortAlgorithm(left), mergeSortAlgorithm(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function visualizeSort() {
    const arrayContainer = document.getElementById('array-container');
    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            arrayContainer.childNodes[i].style.height = `${array[i]}px`;
        }, i * 300);
    }
}

generateArray();

const array = [];

init();
function init() {

    var n = document.getElementById("size").value;
    for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random() * 100) + 1;
    }
    showBars();

}
function play() {
    showBars();
    const copy = [...array];
    const swaps = bubbleSort(copy);
    animate(swaps);

}
function animate(swaps) {
    if (swaps.length == 0) {
        showBars();
        return;
    }
    const [i, j] = swaps.shift();

    [array[i], array[j]] = [array[j], array[i]];
    showBars([i, j]);
    setTimeout(function () {
        animate(swaps);
    }, 850);
}
function bubbleSort(array) {
    const swaps = [];
    do {
        var swapped = false;
        for (let i = 1; i < array.length; i++) {
           
            if (array[i - 1] > array[i]) {
                swapped = true;
                swaps.push([i - 1, i]);
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
            }
        }
    } while (swapped);
    return swaps;
}


function showBars(indices) {
    container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("container");
        bar.style.height = array[i] * 1 + "%";
        bar.classList.add("bar");

        if (indices && indices.includes(i)) {
            bar.style.backgroundColor = "blue";


        }
        const barLabel = document.createElement("label"); 
        barLabel.innerHTML = array[i];
        bar.appendChild(barLabel);
        container.appendChild(bar);



    }


}


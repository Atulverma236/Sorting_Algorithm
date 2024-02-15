
const container = document.getElementById('container');
let bars = [];


function generateRandomArray(length, min, max) {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}


function createBars(arr) {
  container.innerHTML = '';
  bars = arr.map((value) => {
    const bar = document.createElement('div');
    bar.className = 'bar';

    bar.style.height = `${value * 2.5}px`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar__id");
    barLabel.innerHTML = value;
    bar.appendChild(barLabel);
    container.appendChild(bar);
    return bar;
  });
}

async function quicksort() {
  var n = document.getElementById("size").value;
  const newArray = generateRandomArray(n, 1, 100);
  createBars(newArray);

  async function partition(low, high) {
    const pivot = bars[high];
    pivot.style.backgroundColor = 'red';
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      bars[j].style.backgroundColor = 'yellow';

      await new Promise((resolve) => setTimeout(resolve, 300));

      if (parseInt(bars[j].style.height) < parseInt(pivot.style.height)) {
        i++;
        swap(bars[i], bars[j]);
      }

      bars[j].style.backgroundColor = '#0074d9';
    }

    swap(bars[i + 1], bars[high]);
    pivot.style.backgroundColor = '#0074d9';
    return i + 1;
    const barLabel = document.createElement("label"); 
    barLabel.classList.add("bar_id");
 
    barLabel.innerHTML = array[i];
 
    bar.appendChild(barLabel);
    container.appendChild(bar);

  }

  async function quickSort(low, high) {
    if (low < high) {
      const pivotIndex = await partition(low, high);
      await quickSort(low, pivotIndex - 1);
      await quickSort(pivotIndex + 1, high);
    }
  }

  await quickSort(0, bars.length - 1);
}


function swap(bar1, bar2) {
  const temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = temp;
}

reset();

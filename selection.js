
const container = document.getElementById("container");

function generatebars() {
    var n = document.getElementById("size").value;
    for (let i = 0; i < n; i += 1) {
        const value = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;

        const barLabel = document.createElement("label");

        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}
async function SelectionSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    var min_idx = 0;
    for (var i = 0; i < bars.length; i += 1) {
        min_idx = i;
        bars[i].style.backgroundColor = "darkblue";
        for (var j = i + 1; j < bars.length; j += 1) {
            bars[j].style.backgroundColor = "red";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );
            var val1 = parseInt(bars[j].childNodes[0].innerHTML);
            var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
            if (val1 < val2) {
                if (min_idx !== i) {
                    bars[min_idx].style.backgroundColor = " rgb(255,165,0)";
                }
                min_idx = j;
            } else {
                bars[j].style.backgroundColor = " rgb(255,165,0)";
            }
        }
        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
        bars[min_idx].style.backgroundColor = " rgb(255,165,0)";
        bars[i].style.backgroundColor = " rgb(0,0,205)";
    }
}

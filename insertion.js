const container = document.getElementById("container");

function generatebars() {
    var n = document.getElementById("size").value;
    for (let i = 0; i < n; i += 1) {
        const value = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;

        const barLabel = document.createElement("label");
        barLabel.classList.add("bar__id");
        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}
async function InsertionSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    bars[0].style.backgroundColor = "blue ";
    for (var i = 1; i < bars.length; i += 1) {
        var j = i - 1;
        var key =
            parseInt(bars[i].childNodes[0].innerHTML);
        var height = bars[i].style.height;
        var barval = document.getElementById("ele")
        bars[i].style.backgroundColor = "rgb(49, 226, 13)";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
            bars[j].style.backgroundColor = "rgb(49, 226, 13)";
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].childNodes[0].innerText =
                bars[j].childNodes[0].innerText;
            j = j - 1;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );
            for (var k = i; k >= 0; k--) {
                bars[k].style.backgroundColor = " blue";
            }
        }
        bars[j + 1].style.height = height;
        bars[j + 1].childNodes[0].innerHTML = key;
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
        bars[i].style.backgroundColor = " blue";
    }

}
generatebars();

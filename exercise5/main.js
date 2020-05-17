const h1 = document.createElement("h1");
document.body.appendChild(h1);

document.body.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    h1.textContent = `${x}, ${y}`;
})

document.body.addEventListener("click", (event) => {
    const color = getColor(event);
    document.body.style.backgroundColor = color;
})

const getColor = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (x % 2 == 0 && y % 2 == 0) {
        return "red";
    } else if (x % 2 > 0 && y % 2 > 0) {
        return "blue";
    } else if (!(x % 2 == 0) || !(y % 2 == 0)) {
        return "green";
    }
}
const div = document.querySelector('div');
let divX = 200;
let divY = 150;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let flag = false;
let offSetDivX;
let offSetDivY;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = "gray";
    flag = !flag;

    offSetDivX = e.offsetX;
    offSetDivY = e.offsetY;

})

div.addEventListener('mousemove', (e) => {
    if (flag) {
        divX = e.clientX - offSetDivX;
        divY = e.clientY - offSetDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = "black";
    flag = !flag;
})
let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.textContent = "Start";
    document.body.appendChild(btn);

    const btnRst = document.createElement("button");
    btnRst.textContent = "Reset";
    document.body.appendChild(btnRst);

    const ul = document.createElement("ul");
    ul.style.listStyle = 'none';
    document.body.appendChild(ul);

    btn.addEventListener("click", createLiElements);
    btnRst.addEventListener("click", cleanList);
}

const createLiElements = () => {
    const findUl = document.querySelector("ul");
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.textContent = `${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        findUl.appendChild(li);
    }
}
const cleanList = () => {
    document.querySelector("ul").innerHTML = "";
    orderElement = 1;
    size = 10;
}

init()
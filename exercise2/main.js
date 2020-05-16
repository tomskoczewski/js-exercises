let flag = true;
let size = 20;

const div = document.createElement("div");
document.body.appendChild(div);
document.body.style.height = "10000px";
div.style.position = "fixed";
div.style.left = "0";
div.style.top = "0";
div.style.height = size + "px";
div.style.width = "100%";
div.style.backgroundColor = "green";

changeHeight = () => {

    if (size >= window.innerHeight / 2) {
        flag = !flag;
    } else if (size <= 0) {
        flag = !flag;
    }

    if (flag) {
        size += 2;
        div.style.backgroundColor = "green";
    } else {
        size -= 2;
        div.style.backgroundColor = "red";
    }
    div.style.height = size + "px";

}

window.addEventListener("scroll", changeHeight);
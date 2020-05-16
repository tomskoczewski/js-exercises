let size = 10;

const btn = document.querySelector("button");
const liElems = document.querySelectorAll("ul > li");


btn.addEventListener("click", () => {
    // for (let i = 0; i < liElems.length; i++) {
    //     liElems[i].style.display = "block";
    //     liElems[i].style.fontSize = size + "px";
    // }
    liElems.forEach(el => {
        if (el.style.display == "") {
            el.style.display = "block";
        }
        el.style.fontSize = `${size}px`
    })
    size++;

})
const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 3000;
let active = 0;
const left = 37;
const right = 39;
let interval = setInterval(changeSlide, time);


const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}

const keyChangeSlide = (e) => {
    let key = e.keyCode;
    switch (key) {
        case (left):
            clearInterval(interval);
            active--;
            if (active < 0) {
                active = slideList.length - 1;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot();
            break;
        case (right):
            clearInterval(interval);
            active++;
            if (active === slideList.length) {
                active = 0;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot()
            break;
    }

}
window.addEventListener('keydown', keyChangeSlide)
window.addEventListener("keyup", event => {
    if (event.keyCode === left || event.keyCode === right) {
        console.log("aa");
        return interval = setInterval(changeSlide, time);
    }
})
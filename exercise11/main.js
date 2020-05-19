// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3'];
let arrayIndex = 0;
let charIndex = 0;

const addLetter = () => {
    if (charIndex === txt[arrayIndex].length) {
        arrayIndex++;
        if (arrayIndex === txt.length) {
            return
        } else {
            return setTimeout(() => {
                charIndex = 0;
                spnText.textContent = "";
                addLetter();
            }, 2000);
        }
    } else {
        spnText.textContent += txt[arrayIndex][charIndex];
        charIndex++;
    }



    setTimeout(addLetter, 200);

}

addLetter();


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

setInterval(cursorAnimation, 400);
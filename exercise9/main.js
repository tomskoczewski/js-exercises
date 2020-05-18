let optionArray = ["walcz", "przemyśl to jeszcze raz"];
const input = document.querySelector('input');
const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnShowOptions = document.querySelector('.showOptions');
const btnShowAdvice = document.querySelector('.showAdvice');
const h1 = document.querySelector('h1');


const addElement = (e) => {
    e.preventDefault();
    let flag = true;
    const inputValue = input.value;
    if (inputValue.length) {
        optionArray.forEach(e => {
            if (inputValue === e) {
                flag = !flag;
                alert("This element exist");
            }
        })
        if (flag) {
            optionArray.push(inputValue);
            alert(`Added option: ${inputValue}`);
        }
        input.value = "";
    }
    console.log(optionArray);
}

const cleanArray = (e) => {
    e.preventDefault();
    optionArray = [];
    h1.textContent = "";
    console.log(optionArray);
}

const showAdvice = (e) => {
    e.preventDefault();
    h1.textContent = optionArray[Math.floor(Math.random() * optionArray.length)];

}

const showOptions = (e) => {
    e.preventDefault();
    alert(`Możliwości: ${optionArray}`);
}

btnAdd.addEventListener("click", addElement);
btnClean.addEventListener("click", cleanArray);
btnShowOptions.addEventListener("click", showOptions);
btnShowAdvice.addEventListener("click", showAdvice);
// <!-- Przycisk pokaż możliwości - pokazuje w alercie zawartość tablicy -->
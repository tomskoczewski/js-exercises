const form = document.querySelector('form');
const inputTask = document.querySelector('form input')
const filter = document.querySelector('.filter');
const ul = document.querySelector('ul');
const tasksNumber = document.querySelector('h1 span');
const elementsList = [];


const addTask = (event) => {
    event.preventDefault();
    const taskName = inputTask.value;
    if (taskName == "") {
        return;
    }
    const li = document.createElement('li');

    li.className = 'li-list';
    li.innerHTML = `${taskName} <button>Delete</button>`;
    inputTask.value = "";
    elementsList.push(li);

    tasksNumber.textContent = elementsList.length;

    displaylist();

    li.querySelector('button').addEventListener('click', removeTask);
}


const removeTask = (e) => {
    e.preventDefault();
    let index = e.target.parentNode.id;
    console.log(index);
    elementsList.splice(index, 1);
    ul.textContent = "";
    displaylist();
    console.log(elementsList);
    tasksNumber.textContent = elementsList.length;

}

const displaylist = () => {
    elementsList.forEach((element, key) => {
        element.id = key;
        ul.appendChild(element);
    })
}

const filterTasks = (e) => {
    ul.textContent = "";
    const text = e.target.value.toLowerCase();
    const filteredText = elementsList.filter(e => e.childNodes[0].textContent.toLowerCase().includes(text));
    console.log(text);
    filteredText.forEach((element) => {
        ul.appendChild(element);
    })
}

form.addEventListener('submit', addTask);
filter.addEventListener('input', filterTasks);
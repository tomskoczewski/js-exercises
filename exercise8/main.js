const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
const showMessage = (e) => {
    div.textContent = '';
    passwords.forEach((password, index) => {
        if (password.toLowerCase() == e.target.value.toLowerCase()) {
            console.log("logged");
            e.target.value = '';
            div.textContent = messages[index];
        }

    });
}

input.addEventListener("input", showMessage)
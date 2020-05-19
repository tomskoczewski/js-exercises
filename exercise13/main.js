const secOnPage = () => {
    let seconds = 0;
    return () => {
        document.body.textContent = `${++seconds} sec on page`;
    }
}

seconds = secOnPage();

setInterval(seconds, 1000);
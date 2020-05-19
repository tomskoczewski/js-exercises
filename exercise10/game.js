const gameScore = {
    wins: 0,
    losses: 0,
    draws: 0,
    numbers: 0,
}

const game = {
    myChoice: "",
    aiChoice: "",
    gameWinner: "",
}

const hands = document.querySelectorAll('.select img');
const btnStart = document.querySelector('.start');

function myChoice() {
    game.myChoice = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 5px black';
}

function aiChoice() {
    return aiHand = hands[Math.floor(Math.random() * hands.length)].dataset.option;
}

function whoWin(player, ai) {
    gameScore.numbers++;
    if (player == ai) {
        gameScore.draws++;
        return 'draw';
    } else if (player == "paper" && ai == "stone" || player == "stone" && ai == "scissors" ||
        player == "scissors" && ai == "paper") {
        gameScore.wins++;
        return 'win';
    } else {
        gameScore.losses++;
        return 'loss'
    }
}

function gameResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    if (result == 'win') {
        document.querySelector('[data-summary="who-win"]').textContent = "You win ! :)";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    }
    if (result == 'draw') {
        document.querySelector('[data-summary="who-win"]').textContent = "Draw :|";
        document.querySelector('[data-summary="who-win"]').style.color = "grey";
    }
    if (result == 'loss') {
        document.querySelector('[data-summary="who-win"]').textContent = "You loss the game :(";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    }
}

function gameSummary(win, loss, draw, sum) {
    document.querySelector('.numbers span').textContent = sum;
    document.querySelector('.wins span').textContent = win
    document.querySelector('.losses span').textContent = loss;
    document.querySelector('.draws span').textContent = draw;
}

function endGame() {
    hands.forEach(hand => hand.style.boxShadow = '');
    game.myChoice = "";
}

function startGame() {
    if (game.myChoice == "") {
        return alert("Select proper hand")
    }
    game.aiChoice = aiChoice();
    game.gameWinner = whoWin(game.myChoice, game.aiChoice);
    console.log(game.aiChoice);
    console.log(game.gameWinner);

    gameResult(game.myChoice, game.aiChoice, game.gameWinner);
    gameSummary(gameScore.wins, gameScore.losses, gameScore.draws, gameScore.numbers);
    endGame();
}


hands.forEach(hand => hand.addEventListener("click", myChoice));
btnStart.addEventListener("click", startGame);

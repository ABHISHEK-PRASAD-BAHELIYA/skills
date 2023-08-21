const colors = ['red', 'green', 'blue', 'yellow'];
let sequence = [];
let userSequence = [];
let level = 1;
let isGameStarted = false;

const startButton = document.getElementById('startButton');
const sequenceDisplay = document.getElementById('sequenceDisplay');
const userInput = document.getElementById('userInput');

startButton.addEventListener('click', startGame);

function startGame() {
    if (!isGameStarted) {
        isGameStarted = true;
        startButton.disabled = true;
        sequence = [];
        userSequence = [];
        level = 1;
        addRandomColorToSequence();
        displaySequence();
    }
}

function addRandomColorToSequence() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(randomColor);
}

function displaySequence() {
    sequenceDisplay.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
        highlightColor(sequence[i]);
        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
            userInput.textContent = 'Your turn!';
        }
    }, 1000);
}

function highlightColor(color) {
    sequenceDisplay.textContent = color.toUpperCase();
    sequenceDisplay.style.color = color;
    setTimeout(() => {
        sequenceDisplay.style.color = 'black';
    }, 500);
}

document.addEventListener('click', handleColorClick);

function handleColorClick(event) {
    const clickedColor = event.target.textContent.toLowerCase();
    if (isGameStarted && colors.includes(clickedColor)) {
        highlightColor(clickedColor);
        userSequence.push(clickedColor);

        if (userSequence.length === sequence.length) {
            checkUserSequence();
        }
    }
}

function checkUserSequence() {
    let isCorrect = true;
    for (let i = 0; i < userSequence.length; i++) {
        if (userSequence[i] !== sequence[i]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        level++;
        userInput.textContent = 'Correct! Next level: ' + level;
        setTimeout(() => {
            addRandomColorToSequence();
            userSequence = [];
            displaySequence();
        }, 1000);
    } else {
        userInput.textContent = 'Wrong! Game over. Click "Start" to play again.';
        isGameStarted = false;
        startButton.disabled = false;
    }
}
let questionElement = document.getElementById('question');
let answerElement = document.getElementById('answer');
let feedbackElement = document.getElementById('feedback');
let timerElement = document.getElementById('time');
let scoreElement = document.getElementById('score-value');

let currentQuestion = {};
let score = 0;
let timeLeft = 60;
let timer;

function generateQuestion() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    currentQuestion = {
        num1: num1,
        num2: num2,
        answer: num1 + num2
    };
    questionElement.textContent = `What is ${num1} + ${num2}?`;
    answerElement.value = '';
    feedbackElement.textContent = '';
}

function checkAnswer() {
    let userAnswer = parseInt(answerElement.value);
    if (userAnswer === currentQuestion.answer) {
        score++;
        feedbackElement.textContent = `Correct! Your score: ${score}`;
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = `Wrong! The correct answer was ${currentQuestion.answer}. Your score: ${score}`;
        feedbackElement.style.color = 'red';
    }
    scoreElement.textContent = score;
    generateQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    feedbackElement.textContent = `Time's up! Your final score is ${score}`;
    feedbackElement.style.color = 'blue';
    questionElement.textContent = '';
    document.querySelector('button').disabled = true;
    answerElement.disabled = true;
}

// Initialize the first question and start the timer
generateQuestion();
startTimer();

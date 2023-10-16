var startButton = document.getElementById('start-btn');
// listed question in array to add to HTML after start //
var questions = [
  {
    question: "Which is appropriate syntax for the Javascript function:",
    answers: [
      {text: "function[] ()", correct: false},
      {text: "function = () {}", correct: false},
      {text: "function,'' {}", correct: false},
      {text: "function() {}", correct: true},
    ]
  },
  {
    question: "Which is the correct opperator IF a value is not equal to another compared value?",
    answers: [
      {text: "!==", correct: true},
      {text: "-==", correct: false},
      {text: "=!=", correct: false},
      {text: "==!", correct: false},
    ]
  },
  {
    question: "What is the correct way to write a Javascript array?",
    answers: [
      {text: 'var colors =[1:"red", 2:"green", 3:"blue"]', correct: false},
      {text: "var colors =(red,green,blue)", correct: false},
      {text: 'var colors = ["red","green","blue"]', correct: true},
      {text: 'var colors = "red","green","blue"', correct: false},
    ]
  },
  {
    question: "What method is used to get onclick events from HTML elements?",
    answers: [
      {text: "listenOnClick", correct: false},
      {text: "addEventListener", correct: true},
      {text: "addListenerEvent", correct: false},
      {text: "OnClickListener", correct: false},
    ]
  },
  {
    question: "A function associated with an object is called:",
    answers: [
      {text: "function", correct: false},
      {text: "method", correct: false},
      {text: "link", correct: false},
      {text: "none of the above", correct: true},
    ]
  },
]

// targets question and answer elements in HTML //
var questionEl = document.getElementById("question");
var answerButton = document.getElementById("answer-btn");

var currentQuestionIndex = 0;

var answerOne = document.getElementById('answer-one')
var answerTwo = document.getElementById('answer-two')
var answerThree = document.getElementById('answer-three')
var answerFour = document.getElementById('answer-four')

var startPage = document.getElementById('header-start')
var questionPage = document.getElementById('question-container')
var userScorePage = document.getElementById('user-score-container')
var highscorePage = document.getElementById('highscore-list')

var score = 0;
var timer = document.getElementById('timer')


// sets timer with new score, also calling on first question 
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  //Starts timer and sets var to gameClock function every 1 second
  timer.classList.remove('display-none')
  timer = 60;
  var myInterval = setInterval(gameClock, 1000);
  showQuestion();
  // if statement to clear timer and end game if timer reaches 0
  function gameClock() {
    timer--
    document.getElementById('timer').textContent = timer
    if (timer <= 0) {
      clearInterval(myInterval);
      gameOver();
    }
  }
}


// shows question in random order from array //
function showQuestion() {
  // only displays question container after quiz begins
  startPage.classList.add('display-none');
  questionPage.classList.remove('display-none');
  if (questions.length === 0) {
    gameOver();

    return;
  }
  //creating variable for the random question then selecting it with currentQuestion
  var index = Math.floor(Math.random()*questions.length)
  var currentQuestion = questions[index]

  var questionNumber = currentQuestionIndex + 1;
  // inputs randomized question in question element in HTML //
  questionEl.innerHTML = questionNumber + ". " + currentQuestion.question; 
    // targets answer properties through loop for each unique question and enters the html
    for (var i = 0; i < 4; i++) {
      answerButton.children[i].textContent = currentQuestion.answers[i].text;
      // dataset returns boolean value easier for each answer property
      answerButton.children[i].dataset.correct = currentQuestion.answers[i].correct;
    }
    // splices the answered question and stops loop after questions length is reached
    var questionAnswered = questions.splice(index, 1) ;
  }
// 
function gameOver() {
  document.getElementById('timer').classList.add('display-none')
  questionPage.classList.add('display-none');
  userScorePage.classList.remove('display-none');

  var timerScore = 0;

  if (timer >= 50) {
    timerScore = 10;
    document.getElementById('user-score').textContent = timerScore + score;
  } if (timer <= 49 && timer >= 40) {
    timerScore = 7;
    document.getElementById('user-score').textContent = timerScore + score;
  } if (timer <= 39 && timer >= 30) {
    timerScore = 4;
    document.getElementById('user-score').textContent = timerScore + score;
  } if (timer <= 29 && timer >= 20) {
    timerScore = 1;
    document.getElementById('user-score').textContent = timerScore + score;
  }
  // write code to enter users initials here in text area here
  }

function displayHighscore() {
  userScorePage.classList.add('display-none')
  highscorePage.classList.remove('display-none')
}

startButton.addEventListener("click", startQuiz);
//listeners for answers buttons when clicked if true increases score
// if false it will decrease score by 15
answerOne.addEventListener("click", (e) => {
  console.log(e.target.dataset.correct)
  if (e.target.dataset.correct === 'true') {
    score++;
    document.getElementById('user-score').textContent = score;
    } else {
      timer = timer - 15;
    } 
    console.log(score)
    showQuestion();
});
answerTwo.addEventListener("click", (e) => {
  console.log(e.target.dataset.correct)
  if (e.target.dataset.correct === 'true') {
    score++;
    document.getElementById('user-score').textContent = score;
    } else {
      timer = timer - 15;
    } 
    console.log(score)
    showQuestion();
});
answerThree.addEventListener("click", (e) => {
  console.log(e.target.dataset.correct)
  if (e.target.dataset.correct === 'true') {
    score++;
    document.getElementById('user-score').textContent = score;
    } else {
      timer = timer - 15;
    } 
    console.log(score)
    showQuestion();
});
answerFour.addEventListener("click", (e) => {
  console.log(e.target.dataset.correct)
  if (e.target.dataset.correct === 'true') {
    score++;
    document.getElementById('user-score').textContent = score;
    } else {
      timer = timer - 15;
    } 
    console.log(score)
    showQuestion();
});
//listener on user initials submit displays highscore page
document.getElementById('initial-submit').addEventListener('click', displayHighscore)
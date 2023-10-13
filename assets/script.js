var startButton = document.getElementById('start-btn');
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

var questionEl = document.getElementById("question");
var answerButton = document.getElementById("answer-btn");

var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
  console.log('started')
  currentQuestionIndex = 0;
  score = 0;
  //Start Timer
  showQuestion();
}

function showQuestion() {
 var currentQuestion = questions['']
}

startButton.addEventListener("click", startQuiz);
const startButton = document.getElementById("start-btn");
const submitButton = document.getElementById("submit-btn");
const welcomeText = document.getElementById("landing-container");
const questionsContainerEl = document.getElementById("questions-container");
const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-btn");

let randomizeQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  welcomeText.classList.add("hide");
  randomizeQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionsContainerEl.classList.remove("hide");
  setNextQuestion();
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

function setNextQuestion() {
  resetState();
  showQuestion(randomizeQuestions[currentQuestionIndex]);
}

function resetState() {
  clearStatusClass(document.body);
  submitButton.classList.add("hide");
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  selectedButton.style.backgroundColor = "#faf0e6";
  setStatusClass(document.body, correct);
  Array.from(answerButtonsEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (randomizeQuestions.length > currentQuestionIndex + 1) {
    submitButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart?";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question:
      "True or false: JavaScript is the most commonly used and popular programming language.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Where in your HTML should you insert your <script> tag?",
    answers: [
      { text: "In the head", correct: false },
      { text: "At the top of the body", correct: false },
      { text: "At the end of the body", correct: true },
      { text: "On the bottom, outside the body", correct: false },
    ],
  },
  {
    question:
      "Where would you look to see if JavaScript is operating in DevTools?",
    answers: [
      { text: "Elements", correct: false },
      { text: "Console", correct: true },
      { text: "Sources", correct: false },
      { text: "Application", correct: false },
    ],
  },
  {
    question: "What should be used in place of the 'var' statement?",
    answers: [
      { text: "if", correct: false },
      { text: "console.log", correct: false },
      { text: "variable", correct: false },
      { text: "let", correct: true },
    ],
  },
  {
    question: "Which of the following is NOT a JavaScript primitive type?",
    answers: [
      { text: "String", correct: false },
      { text: "Band", correct: true },
      { text: "Boolean", correct: false },
      { text: "Number", correct: false },
    ],
  },
  {
    question: "What does the following operator mean: ==",
    answers: [
      {
        text: "It is an assignment operator, it is assigning a variable",
        correct: false,
      },
      {
        text: "Strict equality - it will only return true if the content and type match the statement",
        correct: false,
      },
      {
        text: "Equality: It will return true if the content matches, even if the types are different",
        correct: true,
      },
      { text: "It doesn't mean anything", correct: false },
    ],
  },
  {
    question:
      "True or false: In Javascript, all answers are considered false unless defined otherwise.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "What is an array in JavaScript?",
    answers: [
      {
        text: "A method of storing multiple items under one variable",
        correct: true,
      },
      { text: "Something that will cause an event to trigger", correct: false },
      { text: "One single item that is being defined", correct: false },
      {
        text: "What you should title your Javascript document",
        correct: false,
      },
    ],
  },
  {
    question: "What is a string?",
    answers: [
      { text: "Text that IS NOT wrapped in quotation marks", correct: false },
      { text: "A number or integer", correct: false },
      { text: "A true or false statement", correct: false },
      { text: "Text that IS wrapped in quotation marks", correct: true },
    ],
  },
  {
    question: "What is a boolean?",
    answers: [
      { text: "Text that IS NOT wrapped in quotation marks", correct: false },
      { text: "A number or integer", correct: false },
      { text: "A true or false statement", correct: true },
      { text: "Text that IS wrapped in quotation marks", correct: false },
    ],
  },
  {
    question: "What is a number primitive type?",
    answers: [
      { text: "Text that IS NOT wrapped in quotation marks", correct: false },
      { text: "A number or integer", correct: true },
      { text: "A true or false statement", correct: false },
      { text: "Text that IS wrapped in quotation marks", correct: false },
    ],
  },
  {
    question: "What symbols do you use to concatenate strings?",
    answers: [
      { text: "= or /=", correct: false },
      { text: "+ or +=", correct: true },
      { text: "< or >", correct: false },
      { text: "! or $", correct: false },
    ],
  },
  {
    question: "Which item must a method function be used with?",
    answers: [
      { text: "Object", correct: true },
      { text: "Array", correct: false },
      { text: "Type", correct: false },
      { text: "Function", correct: false },
    ],
  },
  {
    question: "Why are loops useful?",
    answers: [
      {
        text: "They help code from getting too long and repetitive",
        correct: false,
      },
      {
        text: "They allow for a section of coding to be repeated",
        correct: false,
      },
      {
        text: "They can be used in many different ways to achieve many different outcomes",
        correct: false,
      },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "How do you call a function?",
    answers: [
      { text: "!", correct: false },
      { text: "?", correct: false },
      { text: "[]", correct: false },
      { text: "()", correct: true },
    ],
  },
  {
    question: "What is the global scope?",
    answers: [
      {
        text: "Variables that will only work within the limited element it exists in",
        correct: false,
      },
      {
        text: "Variables and functions that work with each other, but will not work outside of the code that encapsulates it",
        correct: false,
      },
      {
        text: "Variables or functions that are defined outside of any functions or blocks",
        correct: true,
      },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What is the module scope?",
    answers: [
      {
        text: "Variables that will only work within the limited element it exists in",
        correct: false,
      },
      {
        text: "Variables and functions that work with each other, but will not work outside of the code that encapsulates it",
        correct: true,
      },
      {
        text: "Variables or functions that are defined outside of any functions or blocks",
        correct: false,
      },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What is the function scope?",
    answers: [
      {
        text: "Variables that will only work within the limited element it exists in",
        correct: true,
      },
      {
        text: "Variables and functions that work with each other, but will not work outside of the code that encapsulates it",
        correct: false,
      },
      {
        text: "Variables or functions that are defined outside of any functions or blocks",
        correct: false,
      },
      { text: "None of the above", correct: false },
    ],
  },
];

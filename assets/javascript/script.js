//trigger game play upon clicking the start button
document.addEventListener("DOMContentLoaded", function () {
    let startButton = document.getElementById("startButton");
  
    startButton.addEventListener("click", function () {
      // Start the game logic here
      startGame();
    });

  function startGame() {
    // game logic goes here
    console.log("And Begin!");
  }
});

//define and answer the questions
let questions = [
    {
        question: "True or false: JavaScript is the most commonly used and popular programming language.",
        answers: ["True", "False"],
        correctAnswer: 0
    },
    {
        question: "Where in your HTML should you insert your <script> tag?",
        answers: ["In the head", "At the top of the body", "At the end of the body", "On the bottom, outside the body"],
        correctAnswer: 2
    },
    {
        queston: "Where would you look to see if JavaScript is operating in DevTools?",
        answers: ["Elements", "Console", "Sources", "Application"],
        correctAnswer: 1
    },
    {
        question: "What should be used in place of the 'var' statement?",
        answers: ["if", "console.log", "variable", "let"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is NOT a JavaScript primitive type?",
        answers: ["String", "Band", "Boolean", "Number"],
        correctAnswer: 1
    },
    {
        questions: "What does the following operator mean: ==",
        answers: ["It is an assignment operator, it is assigning a variable", "Strict equality - it will only return true if the content and type match the statement", "Equality: It will return true if the content matches, even if the types are different", "It doesn't mean anything"],
        correctAnswer: 2
    },
    {
        question: "True or false: In Javascript, all answers are considered false unless defined otherwise.",
        answers: ["True", "False"],
        correctAnswer: 1
    },
    {
        question: "What is an array in JavaScript?",
        answers ["A method of storing multiple items under one variable", "Something that will cause an event to trigger", "One single item that is being defined", "What you should title your Javascript document"],
        correctAnswer: 0
    },
    {
        question: "What is a string?",
        answers: ["Text that IS NOT wrapped in quotation marks", "A number or integer", "A true or false statement", "Text that IS wrapped in quotation marks"],
        correctAnswer: 3
    },
    {
        question: "What is a boolean?",
        answers: ["Text that IS NOT wrapped in quotation marks", "A number or integer", "A true or false statement", "Text that IS wrapped in quotation marks"],
        correctAnswer: 2
    },
    {
        question: "What is a number primitive type?",
        answers: ["Text that IS NOT wrapped in quotation marks", "A number or integer", "A true or false statement", "Text that IS wrapped in quotation marks"],
        correctAnswer: 1
    },
    {
        question: "What symbols do you use to concatenate strings?",
        answers: ["= or /=", "+ or +=", "< or >", "! or $"],
        correctAnswer: 1
    },
    {
        question: "Which item must a method function be used with?",
        answers: ["Object", "Array", "Type", "Function"],
        correctAnswer: 0
    },
    {
        question: "Why are loops useful?",
        answers: ["They help code from getting too long and repetitive", "They allow for a section of coding to be repeated", "They can be used in many different ways to achieve many different outcomes", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "How do you call a function?",
        answers: ["!", "?", "[]", "()"],
        correctAnswer: 3
    },
    {
        question: "What is the global scope?",
        answers:["Variables that will only work within the limited element it exists in", "Variables and functions that work with each other, but will not work outside of the code that encapsulates it", "Variables or functions that are defined outside of any functions or blocks", "None of the above"],
        correctAnswer: 2
    },
    {
        question: "What is the module scope?",
        answers:["Variables that will only work within the limited element it exists in", "Variables and functions that work with each other, but will not work outside of the code that encapsulates it", "Variables or functions that are defined outside of any functions or blocks", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "What is the function scope?",
        answers:["Variables that will only work within the limited element it exists in", "Variables and functions that work with each other, but will not work outside of the code that encapsulates it", "Variables or functions that are defined outside of any functions or blocks", "None of the above"],
        correctAnswer: 0
    }
];

//creating variables to be used in the answering
let currentQuestion = 0;
let score = 0;

//DOM elements
let questionEl = document.getElementById("question");
let answersEl = document.getElementById("answers");
let submitEl = document.getElementById("submitButton");
let scoreEl = document.getElementById("score");

//display the questions and options
function askQuestion() {
    let question = questions[currentQuestion];
    questionEl.textContent = question.question;

    answersEl.innerHTML = "";
    for (let i = 0; i <question.choices.length; i++) {
        let choice = question.choices[i];
        let li = document.createElement("li");
        li.textContent = choice;
        li.dataset.choiceIndex = i;
        choicesElement.appendChild(li);
    }
}

//check answers
function checkAnswer(event) {
    let userChoice = event.target;
    if(userChoice.tagName === "LI") {
        let userChoiceIndex = parseInt(selectedChoice.dataset.choiceIndex);
        let question = questions[currentQuestion];

        if(selectedChoiceIndex === question.correctAnswer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
            askQuestion();
        } else {
            endQuiz();
        }
    }
}

//end quiz
function endQuiz() {
    answersEl.innerHTML = "";
    questionEl.textContent = "Game over! Your score: " + score;
    submitButton.disabled = true;
    scoreEl.textContent = "";
}

answersEl.addEventListener('click', checkAnswer);
submitButton.addEventListener("click", endQuiz);

//start the quiz
askQuestion();
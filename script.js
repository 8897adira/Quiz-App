const questions = [
    {
        question: "Which type of JavaScript language is ___",
         answer: [
            {text: "Object-Oriented" , correct: false },
            {text: "Object-Based" , correct: true },
            {text: "Assembly-language" , correct: false },
            {text: "High-level" , correct: false },
         ]
    },
    {
        question: " Which one of the following also known as Conditional Expression:",
         answer: [
            {text: "Alternative to if-else" , correct: false },
            {text: "Switch statement" , correct: false },
            {text: "If-then-else statement" , correct: false },
            {text: "immediate if" , correct: true },
         ]
    },
    {
        question: " In JavaScript, what is a block of statement?",
         answer: [
            {text: "Conditional block" , correct: false },
            {text: "block that combines a number of statements into a single compound statement" , correct: true },
            {text: "both conditional block and a single statement" , correct: false },
            {text: "block that contains a single statement" , correct: false },
         ]
    },
    {
        question: " When interpreter encounters an empty statements, what it will do:",
         answer: [
            {text: "Shows a warning" , correct: false },
            {text: "Prompts to complete the statement" , correct: false },
            {text: "Throws an error" , correct: false },
            {text: "Ignores the statements" , correct: true },
         ]
    },
    {
        question: " Which of the following type of a variable is volatile?",
         answer: [
            {text: "Mutable variable" , correct: true },
            {text: "Dynamic variable" , correct: false },
            {text: "Volatile variable" , correct: false },
            {text: "Immutable variable" , correct: false },
         ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.displayed = true;
    });
    nextButton.style.display = "block";
}

function showscore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}



nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();












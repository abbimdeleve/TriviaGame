
$(document).ready(function () {

    const questions = [
        {
            q: "How did Harry's parents die?",
            op: ["in a car crash", "a high cholesterol diet", "murder by Lord Voldemort", "an experimental spell gone wrong"],
            a: 2
        },
        {
            q: "What shape is Harry's scar?",
            op: ["heart", "circle", "trapezoid", "lightning bolt"],
            a: 3
        },
        {
            q: "What language does Harry speak other than english?",
            op: ["Yiddish", "parseltongue", "klingon", "xhosa"],
            a: 1
        },
        {
            q: "Fill in the blank: 'Miss Granger, __ turns should do it.'",
            op: ["3", "17", "5", "2"],
            a: 0
        },
        {
            q: "How did Cedric Diggory breathe underwater in the Black Lake?",
            op: ["gillyweed", "scuba gear", "bubble charm", "transfiguration"],
            a: 3
        },
        {
            q: "How many horcruxes did Lord Voldemort make?",
            op: ["4", "7", "6", "8"],
            a: 1
        },
        {
            q: "Which of these ingredients is used in polyjuice potion?",
            op: ["boomslang skin", "ashwinder egg", "powdered moonstone", "whiteclaw"],
            a: 0
        },
        {
            q: "How many middle names does Albus Dumbledore have?",
            op: ["1", "2", "3", "4"],
            a: 2
        },
        {
            q: "What profession did Hermione's parents occupy?",
            op: ["teachers", "stunt doubles", "dentists", "beekeepers"],
            a: 2
        },
        {
            q: "What advantage did Harry Potter hold over Tom Riddle?",
            op: ["strength", "power in numbers", "hair", "love"],
            a: 3
        }

    ];

    let currentQuestionId = 0
    let correct = 0
    let incorrect = 0
    let counter = 15

    $("#beginQuiz").on("click", startQuiz)
    $(document).on("click", ".answers", checkAns)


    function nextQuestion() {
        currentQuestionId++;
        askQuestion()
    }

    function counterFunc() {
        counter--;
    }

    function startQuiz() {
        askQuestion();
        setInterval(counterFunc, 1000);
    }


    function askQuestion() {
        $("#questionBox").text("");
        $("#answerBox").text("");
        $("#questionBox").append(questions[currentQuestionId].q);
        questions[currentQuestionId].op.forEach(function (x, i) {
            const answerPar = $("<p class ='answers' data-index=" + i + ">" + x + "</p>");
            $("#answerBox").append(answerPar);
        });
    }


    function checkAns() {
        const userGuess = $(this).attr("data-index");
        if (userGuess == questions[currentQuestionId].a) {
            correct++;
            alert("correct: " + correct);
        } else {
            incorrect++;
            alert("incorrect: " + incorrect);
        }
        if (correct + incorrect === questions.length) {
            displayQuestion();
            displayResults();
        }
        if (correct) {
            nextQuestion();

        }
        // displayQuestion();
    }
    function displayQuestion() {
        currentQuestionId++;
        $("#questionBox").text("");
        $("#answerBox").text("");
        startQuiz();
    }
    function displayResults() {
        const resultsPar = $("<p class ='results'>" + "Correct: " + correct + "Incorrect: " + incorrect + "</p>").appendTo("#questionBox");

    }
})

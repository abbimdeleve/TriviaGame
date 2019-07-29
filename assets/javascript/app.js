
$(document).ready(function () {
    let question;
    let answer;
    
const questions = [
    ["How did Harry's parents die?", "(a) a car crash", "(b) a high cholesterol diet", "(c) murder by Lord Voldemort","(d) an experimental spell gone wrong","(c)"],

    ["What shape is Harry's scar?", "(a) heart", "(b) circle", "(c) trapezoid", "(d) lightning bolt", "(d)"],

    ["What language does Harry speak other than english?", "(a) Yiddish", "(b) parseltongue", "(c) klingon", "(d) xhosa", "(b)"],

    ["Fill in the blank: 'Miss Granger, __ turns should do it.'", "(a) 3", "(b) 17", "(c) 5", "(d) 2", "(a)"],

    ["How did Cedric Diggory breathe underwater in the Black Lake?", "(a) gillyweed", "(b) scuba gear", "(c) bubble charm", "(d) transfiguration", "(b)"],

    ["How many horcruxes did Lord Voldemort make?", "(a) 4", "(b) 7", "(c) 6", "(d) 8", "(b)"]

];

console.log(questions);

function startQuiz() {
    let userAns
    let score = 0;
for (let i=0; i<questions.length; i++){
    if(userAns===answer){
        alert("You're correct");
        score++
    } else{
        alert("Incorrect");
    }
    $("#questionBox").text(questions[i]);
}}
startQuiz()
})

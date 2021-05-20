//Question bank
var questionBank= [
    {
        question : "We____(play) video games yesterday at 3 o'colck",
        option : ["was","were","were playing","was playing"],
        answer : "were playing"
    },
    {
        question : "They___(not/do) their homework yesterday at 3 o'clock",
        option : ["weren't doing","wasn't doing","were doing","was doing"],
        answer : "weren't doing"
    },
    {
        question : "What___he___(watch) on television when you arrived?",
        option : ["was/watching","were/watching","was/watch","were/watch"],
        answer : "was/watching"
    },
    {
        question : "Howard__(like) the movie.",
        option : ["was liking","was likeing","were liking","were likeing"],
        answer : "was liking"
    },
    {
        question : "My parents__(work) when i came home.",
        option : ["are working","is working","were working","was working"],
        answer : "were working"
    },
    {
        question : "In 2010, we ____ (live) in a small flat in London.",
        option : ["was living","were living","does living","do living"],
        answer : "were living"
    },
    {
        question : "She ____ (listen) to music when I called.",
        option : ["was listening","were listening","are listening","is listening"],
        answer : "was listening"
    },
    {
        question : " _____ it _____ (rain) when you left?",
        option : ["was / raining","were / raining","is /raining","are / raining"],
        answer : "was / raining"
    },
    {
        question : " Ana and mark ___________ (not /drive) to house",
        option : ["was not driving","were not driving","was playing","are not playing"],
        answer : "were not driving"
    },
    {
        question : "Miguel _________ (speak) with Lucia",
        option : ["was speaking","were speaking","are speaking","is speaking"],
        answer : "was speaking"
    }
   
]
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
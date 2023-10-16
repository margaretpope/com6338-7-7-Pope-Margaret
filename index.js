var questionsArr = [
    {
        question: 'Who is the head coach for the University of Alabama football team?',
        answer: 'Nick Saban',
        options: [
          'Tim Tebow',
          'Nick Saban',
          'Paul Bryant',
          'Dabo Swinney',
        ]
    },
    {
        question: "How many national championships has Alabama's football team won?",
        answer: '18',
        options: [
            '18',
            '10',
            '5',
            '20',
        ]
    },
    {
        question: 'Where is the University of Alabama located?',
        answer: 'Tuscaloosa',
        options: [
            'Birmingham',
            'Tuscaloosa',
            'Mobile',
            'Auburn',
        ]
    },
    {
        question: "Who is the University of Alabama's mascot?",
        answer: 'Big Al',
        options: [
            'Demon Deacon',
            'Albert',
            'Uga',
            'Big Al',
        ]
    },
    {
        question: "What is Alabama's cheer?",
        answer: 'Roll Tide!',
        options: [
            'War Eagle!',
            'Roll Tide!',
            'Woo Pig Sooie!',
            'Go Gators!',
        ]
    },
]
var quizDiv = document.getElementById('quiz')
var btn = document.createElement('button')
var para = document.createElement('p')
var currentQuestion = 0
var score = 0
var question = questionsArr[currentQuestion].question
var correctAns = questionsArr[currentQuestion].answer
var timeLeft = 30
var timerP = document.createElement('p')
var scoreP = document.createElement('p')
var finalScore = Math.round((score / questionsArr.length) * 100) + "%"
localStorage.setItem('finalScore', finalScore)
var prevScore = localStorage.getItem('finalScore')

window.onload = function() {
    if (finalScore) {
        quizDiv.appendChild(scoreP)
        scoreP.textContent = prevScore
        quizDiv.appendChild(btn)
        btn.textContent = 'Start Quiz!'
        btn.setAttribute('id','start-quiz')
    } else {
        quizDiv.appendChild(btn)
        btn.textContent = 'Start Quiz!'
        btn.setAttribute('id','start-quiz')
    }
}

btn.onclick = function() {
    this.style.display = 'none'
    scoreP.style.display = 'none'
    showQuestion()
    showOptions()
    var timerId = setInterval(countdown, 1000) 
    function countdown() {
        quizDiv.appendChild(timerP)
        if (timeLeft === -1) {
            clearInterval(timerId)
        } else{
            timerP.textContent = timeLeft
            timeLeft--
        }
    }
}    

function selectAnswer(e) {
    var input = e.target
    if (input === correctAns) {
        score++
        nextQuestion()
    } else if (input.textContent !== correctAns) {
        nextQuestion()
    } else {
        nextQuestion()
    } 
}

function showQuestion() {
    quizDiv.appendChild(para)
    if (currentQuestion < questionsArr.length -1) {
        para.textContent = question        
    }
}

function nextQuestion() {
    if ((currentQuestion +1) < questionsArr.length -1) {
        para.textContent = question
        showOptions()
        var timerId = setInterval(countdown, 1000) 
        function countdown() {
            quizDiv.appendChild(timerP)
            if (timeLeft === -1) {
                clearInterval(timerId)
            } else{
                timerP.textContent = timeLeft
                timeLeft--
            }        
        }    
    } else {
        btn.style.display = 'block'
        para.textContent = finalScore
    }
}

function showOptions() {
    for (var i = 0; i < questionsArr[currentQuestion].options.length; i++) {
        var answerBtn = document.createElement('button')
        quizDiv.appendChild(answerBtn)
        answerBtn.textContent = questionsArr[currentQuestion].options[i] 
    }
}















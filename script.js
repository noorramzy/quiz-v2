let userScore = 0
let strikes = 0

let number = 10.0
let myInterval = setInterval(myTime, 100)

function myTime() { 
    number = (number - 0.1).toFixed(1)
    console.log(number)
    document.querySelector(".timer").innerHTML = number
    if(number <= 0){
        stopTimer()
    } else if(strikes === 3){
        stopTimer()
    }
}

function stopTimer() {
    clearInterval(myInterval)
        document.querySelector(".timer").innerHTML = "xxx"
        document.querySelector('.answers').innerHTML = ""
        document.querySelector('.question').innerHTML = ""
        document.querySelector('.game-over').innerHTML = "GAME OVER"
        document.querySelector('.your-score').innerHTML = "Your score: " + userScore
}





function generateQuestion(){
    let a = Math.round(Math.random() * 100)
    let b = Math.round(Math.random() * 100)
    
    document.querySelector('.question').innerHTML = `What is ${a} + ${b}?`
    
    let correctAnswer = a+b
    let correctAnswerIndex = Math.floor(Math.random() *4) 

    for (let i = 0; i < 4; i++){
        
        
        let randoAnswer = Math.round(Math.random() * 200)
        

        let answerDiv = document.createElement('div')
        
        if(i === correctAnswerIndex){
            answerDiv.classList.add('correctanswer')
            answerDiv.innerHTML = correctAnswer
        } else{
            answerDiv.classList.add('answer')
            answerDiv.innerHTML = randoAnswer
        }

        document.querySelector('.answers').appendChild(answerDiv)
        
        answerDiv.addEventListener('click', () => {
            if (i === correctAnswerIndex){
                document.body.style.background = "DarkSeaGreen"
                number = 11
                userScore++
                document.querySelector(".score").innerHTML = "User Score: " + userScore
            }
            else{
                document.body.style.background = "LightCoral"
                strikes++
                document.querySelector(".strikes").innerHTML = "Strikes: " + strikes

            } 
            setTimeout(() => {
                document.body.style.background = "white"
            }, 400)
            
            document.querySelector('.answers').innerHTML = ""
            generateQuestion()
        })
    }     
}

generateQuestion()








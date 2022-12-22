
let randomNumber = generateNumber()
console.log(randomNumber)
function generateNumber(){
    return Math.floor(Math.random()*101)
}

window.onload = function(){
    document.getElementById('checker').addEventListener('click',playGame)
    document.getElementById('restart').addEventListener('click',restart)
}



function playGame(){
    const guess = Number(document.getElementById('answer-submit').value)
    display(guess)
    displayHistory(guess)


}




function display(guess){
    console.log(guess)
    let text = document.getElementById('result')
    const info = document.getElementById('info')
    if(guess < randomNumber){
        info.style.color = 'red'
       text.textContent = 'your guess is too low'
   }else if(guess > randomNumber){
       info.style.color = 'red'
     text.textContent = 'your guess is too high'
   }else{
       info.style.color = 'green'
   text.textContent = 'you won'
   }
}

function displayHistory(guess){
    console.log(guess)
    const history = document.getElementById('history')
    console.log(`you guessed ${guess}`)
    let tracker = document.createElement('li')
    tracker.textContent = `you guessed ${guess}`
    history.appendChild(tracker)

}


function restart(){
    const newText = document.getElementById('result').textContent = ''
    const newHistory = document.getElementById('history').textContent = ''
    randomNumber=generateNumber()
    const newField = document.getElementById('answer-submit').value = ''
    console.log(randomNumber)
}
   


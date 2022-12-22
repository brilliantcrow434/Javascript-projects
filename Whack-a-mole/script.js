let timeLeft = document.getElementById('time')
const score = document.getElementById('score')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

let time = 6
let result = 0
let moleSquare 
const randomSquare = () => {
    squares.forEach((square) => {
        square.classList.remove('mole')
        
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    moleSquare = randomSquare.id
}



const moveMole = () => {
    let timer = null

    
    timerId = setInterval(randomSquare,(Math.random()*1000)+500)
}

squares.forEach((square)=>{
    square.addEventListener('click',()=>{
        if(square.id === moleSquare){
            result++
            score.textContent = `Score: ${result}`
        }
    })
})



const checkEnd = () => {
    
    time--
    timeLeft.textContent = `Time Left: ${time}`
     if(time === 0) {
        alert('game over')
        clearInterval(timer)
        clearInterval(timerId)
    }
}
let timer = setInterval(checkEnd,1000)
moveMole()


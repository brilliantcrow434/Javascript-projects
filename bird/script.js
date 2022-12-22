const bird = document.querySelector('.bird')
const display = document.querySelector('.container')
const ground = document.querySelector('.ground')
const sky = document.querySelector('.sky')
console.log(sky.clientHeight)
let birdLeft = 220
let birdBottom = 100
let isGameOver = false
let genOb
let gravity = 2
let gap = 50
console.log(bird.clientWidth)
const startGame = () => {
    birdBottom -=gravity
    bird.style.bottom = birdBottom + 'px'
    bird.style.left = birdLeft + 'px'

    
}

const jump = () => {
   if(birdBottom + bird.clientHeight <= sky.clientHeight-10){
    birdBottom += 50
   }
   bird.style.bottom = birdBottom + 'px'
   console.log(birdBottom)
}

addEventListener('keyup',jump)

let timer = setInterval(startGame,20)


const generateObstacle = () => {
    let obstacleLeft = 500
    let topObstacleLeft = 520
    let randomHeight = Math.random()*60
    let topRandomHeight = (Math.random()*30) + 400
    let obstacleBottom = randomHeight
    let obstacleTop = topRandomHeight
    const topObstacle = document.createElement('div')
    const obstacle = document.createElement('div')
    obstacle.classList.add('obstacle')
    topObstacle.classList.add('obstacle')
    display.appendChild(obstacle)
    display.appendChild(topObstacle)
    obstacle.style.left = obstacleLeft + 'px'
    obstacle.style.bottom = obstacleBottom + 'px'
    topObstacle.style.left = topObstacleLeft + 'px'
    topObstacle.style.bottom = obstacleTop + gap + 'px'

    const moveObstacle = () => {
        obstacleLeft -= 2
        topObstacleLeft -= 2
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = topObstacleLeft + 'px'

        if(obstacleLeft === -60 || topObstacleLeft === -70){
            clearInterval(move)
            display.removeChild(obstacle)
            display.removeChild(topObstacle)
        }

        if(birdBottom === 0){
            gameOver()
            
        }
        //
        
        if(bird.clientWidth >= topObstacleLeft - birdLeft && birdBottom + ground.clientHeight > obstacleTop||
            birdBottom + ground.clientHeight + obstacleBottom < obstacle.clientHeight && bird.clientWidth >= obstacleLeft - birdLeft     ){
            alert('dead')
        }
      
       
    }

    let move = setInterval(moveObstacle,20) 
    genOb = setTimeout(generateObstacle,3000)
}

generateObstacle()


const gameOver = () => {
    clearInterval(timer)
    clearTimeout(genOb)
    isGameOver = true
    document.removeEventListener('keyup',jump)
}


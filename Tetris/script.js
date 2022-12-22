const grid = document.querySelector('.grid')

const score = document.getElementById('score')
const play = document.getElementById('start')
const width = 10
const squares = []


const lTetromino = [
    [0,width,width*2,1],
    [width,width+1,width+2,width*2+2],
    [1,width+1,width+2,width*2+2]
]

const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1,width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1,width+2,width*2,width*2+1]
]

const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
]

const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
]

const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
]

const theTetrominoes = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]





let currentPosition = Math.floor(Math.random()*theTetrominoes.length)
let currentRotation = 0
let current = theTetrominoes[currentPosition][currentRotation]




for (let i=0; i<200; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    squares.push(square)
    grid.appendChild(square)
   
}

//draw
const draw = () => {
    current.forEach((index)=>{
        squares[currentPosition + index].classList.add('tetromino')
    })
}

draw();
// const lTetromino ='firstShape'
// const zTetromino = 'secondShape'
// const oTetromino ='thirdShape'
// const iTetromino = 'fourthShape'
// const tTtetromino ='fifthShape'

// const tetrominoes = [lTetromino,zTetromino,oTetromino,iTetromino,tTetromino]




const undraw = () => {
    current.forEach((index)=>{
        squares[currentPosition + index].classList.remove('tetromino')
    })
}

function moveDown(){
    undraw()
    currentPosition +=width
    draw()
    stop()
}

const timerId = setInterval(moveDown,1000)

const stop = () => {
   if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
       current.forEach((index)=>{
        squares[currentPosition + index].classList.add('taken')
        let currentPosition = Math.floor(Math.random()*theTetrominoes.length)
        let currentRotation = 4
        let current = theTetrominoes[currentPosition][currentRotation]
        draw()
    })

   }
}
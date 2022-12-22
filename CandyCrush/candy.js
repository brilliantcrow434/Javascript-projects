
const grid = document.querySelector('.grid')
const width = 8
const squares = []
let score = 0

const candyColor = [
    'red',
    'yellow',
    'orange',
    'green',
    'purple',
    'blue'
]

//create a border
function createBoard(){
    for (let i=0; i<width*width; i++){
        const square = document.createElement('div')
        square.setAttribute('draggable',true)
        square.setAttribute('id',i)
        const random = Math.floor(Math.random()*candyColor.length)
        square.style.background = candyColor[random]
        grid.appendChild(square)
        squares.push(square)

    }
}
createBoard()
//getting square background color
let colorBeingDragged 
let colorBeingReplaced
let squareIdBeingReplaced
let squareIdBeingDragged

//drag the candies
squares.forEach(square =>square.addEventListener('dragstart',dragStart))
squares.forEach(square =>square.addEventListener('dragover',dragOver))
squares.forEach(square =>square.addEventListener('dragend',dragEnd))
squares.forEach(square =>square.addEventListener('dragenter',dragEnter))
squares.forEach(square =>square.addEventListener('dragleave',dragLeave))
squares.forEach(square =>square.addEventListener('drop',dragDrop))


function dragStart(){
    colorBeingDragged = this.style.background
    squareIdBeingDragged = parseInt(this.id)
    console.log(colorBeingDragged)
   console.log(this.id,'dragStart')
}

function dragEnd(){
   console.log(this.id,'dragEnd')
   //what is a valid move?
   let validMoves = [
       squareIdBeingDragged + 1,
       squareIdBeingDragged -1,
       squareIdBeingDragged + width,
       squareIdBeingDragged - width
   ]

   let validMove = validMoves.includes(squareIdBeingReplaced)

   if(squareIdBeingDragged && validMove){
       squareIdBeingReplaced = null
   }else if(squareIdBeingDragged && !validMove){
       squares[squareIdBeingDragged].style.background = colorBeingReplaced
       squares[squareIdBeingReplaced].style.background = colorBeingDragged
   }else{
       squares[squareIdBeingDragged].style.background = colorBeingDragged
   }


   //move candies down
   function moveDown(){
       for(let i=0; i<55; i++){
           if(squares[i + width].style.backgroundColor = ''){
               squares[i + width].style.backgroundColor = squares[i].style.backgroundColor
               squares[i].style.backgroundColor = ''
           }
       }
       

   }
   moveDown()
  

   //checking for matches
   //check rows of three
   function checkForRowOfThree(){
       for(let i=0; i<61; i++){
           let rowOfThree = [i,i+1,i+2]
           const notValid = [6,7,14,15,22,23,30,31,38,39,46,47,54,55]
           if(notValid.includes(i)) continue
           let decidedColor = squares[i].style.backgroundColor
           const isBlank = squares[i].style.backgroundColor === ''
           if(rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)){
           score +=3
           rowOfThree.forEach(index =>{
               squares[index].style.backgroundColor = ''
           })
        }
        }
   }
 checkForRowOfThree()
 console.log(score)

 function checkForColumnOfThree(){
     
     for(let i=0; i<47; i++){
         let columnOfThree = [i,i+width,i+width*2]
         let decidedColor = squares[i].style.backgroundColor 
         const isBlank = squares[i].style.backgroundColor === ''
         if(columnOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)){
             score +=3
             columnOfThree.forEach(index => {
                 squares[index].style.backgroundColor = ''
             })
         }
     }
 }
checkForColumnOfThree()
}

setInterval(() => {
    checkForColumnOfThree()
    checkForRowOfThree()
    moveDown()
},100);



function dragOver(event){
    event.preventDefault()
    console.log(this.id,'dragOver')
}

function dragEnter(event){
    event.preventDefault()
    console.log(this.id,'dragenter')
}

function dragDrop(){
    console.log(this.id,'drop')
    colorBeingReplaced = this.style.background
    squareIdBeingReplaced = parseInt(this.id)
    this.style.background = colorBeingDragged
    squares[squareIdBeingDragged].style.background = colorBeingReplaced
    console.log('dragleave')
}

function dragLeave(){

}


//check for rows of three


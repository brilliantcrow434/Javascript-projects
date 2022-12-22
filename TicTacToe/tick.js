const boxes = document.querySelectorAll('.box')
const output = document.querySelector('.output')
const h1 = document.querySelector('h1')
const options = document.querySelector('.selection')
const compBtn = document.querySelector('.computer')
const friendBtn = document.querySelector('.friend')
const xButtton = document.querySelector('.playerx')
const oButtton = document.querySelector('.playero')
const playBtn = document.querySelector('.play')
const indicator = document.querySelector('.details')
const board = document.querySelector('.container')
const x = document.querySelector('.x')
const o = document.querySelector('.o')
const replayBtn = document.getElementById('replay')

let playerOne
let playerTwo

let container = {}


//getting inputs 
let opponent = ''
let weapon = ''
let computerWeapon = 'x'


compBtn.addEventListener('click',(event)=>{
    opponent = event.target.textContent
    compBtn.classList.add('active')
    friendBtn.classList.remove('active')
})
friendBtn.addEventListener('click',(event)=>{
    opponent = event.target.textContent
    friendBtn.classList.add('active')
    compBtn.classList.remove('active')
} )

xButtton.addEventListener('click',(event)=>{
    weapon = event.target.name
    xButtton.classList.add('active')
    oButtton.classList.remove('active')
})
oButtton.addEventListener('click',(event)=>{
    weapon = event.target.name
    oButtton.classList.add('active')
    xButtton.classList.remove('active')
})

playBtn.addEventListener('click',()=>{
   if(opponent === '' || weapon === ''){
       alert('please select both an opponent and a weapon')
   }else{
       options.style.display = 'none'
       indicator.style.display = 'flex'
       board.style.display = 'flex'
   }
   if(opponent === 'Computer'){
    boxes.forEach((box,index)=>{
        box.addEventListener('click',()=>computer(box,index))
        box.addEventListener('click',checkWin)
    
    })
   
}else if(opponent = 'Friend'){
    boxes.forEach((box,index)=>{
        box.addEventListener('click',()=>updateBox(box,index))
        box.addEventListener('click',checkWin)
    
    })
}
    
})
let emptySpace = [0,1,2,3,4,5,6,7,8]
let won = false


// const checkVertical = (index) => {
    //check first row
const checkWinner = (index) => {
    if(index === 0 || index === 1 || index === 2){
        console.log(index+3)
        if(container[index+3] === container[index] &&
            container[index+6] === container[index]){
                won = true
            displaywinner(index)
         }
    }
     
    
    //check for second row
    if(index === 3 || index === 4 || index === 5){
        if(container[index-3] === container[index] &&
            container[index+3] === container[index]){
                won = true
                displaywinner(index)
         }
    }

    //check for third row
    if(index === 6 || index === 7 || index === 8){
        if(container[index-3] === container[index] &&
            container[index-6] === container[index]){
                won = true
                displaywinner(index)
         }
    }
// }

// const checkHorizontal = (index) => {

        //first columns
         if(index === 0 || index === 3 || index === 6){
            if(container[index+1] === container[index] && container[index+2] === container[index]){
                won = true
                displaywinner(index)
             }
          
         }
         
            //second column
        else if(index ===1 || index === 4 || index === 7){
            if(container[index+1] === container[index] && container[index-1] === container[index]){
                won = true
                displaywinner(index)
            }
           return 'no'
        }

            //third column
        else if(index ===2 || index === 5 || index === 8){
            if(container[index-2] === container[index] &&
                container[index-1] === container[index]){
                    won = true
                    displaywinner(index)
                
            }
           
        }
            
// }

// const checkDiagonal = (index) => {
    if(index === 0){
        if(container[index+4] === container[index] && container[index+8] === container[index]){
            won = true
           displaywinner(index)
        }
    }

    if(index === 4){
        if(container[index+4] === container[index] && container[index-4] === container[index]){
            won = true
            displaywinner(index)
        }
        if(container[index-2] === container[index] && container[index+2] === container[index]){
            won = true
            displaywinner(index)
          
        }
    }

    if(index === 8){
        if(container[index-4] === container[index] && container[index-8] === container[index]){
            won = true
            displaywinner(index)
            
        }
    }
    if(index === 2){
        if(container[index+2] === container[index] && container[index + 4] === container[index]){
            won = true
            displaywinner()
        }
    }
    if(index === 6){
        if(container[index-2] === container[index] && container[index-4] === container[index]){
            won = true
            displaywinner()
        }
    }
// }

}



let value

let turn = value
const updateBox = (square,index) => {
    
    value === 'x'? value = 'o': value = 'x'
    
    if(value === 'x') {
        o.classList.add('active')
        x.classList.remove('active')
        console.log(x)
    }else{
        o.classList.remove('active')
        x.classList.add('active')
    }
   
   
   
    square.textContent = value
    square.style.pointerEvents = 'none'

    for(let i=0; i<emptySpace.length-1; i++){
        if(index === i){
            console.log(i)
            console.log(index)
            emptySpace.splice(index,1)
            console.log(emptySpace)
            emptySpace.length -=1
        }
    }
    
}
let tracker = 0
const checkWin = (event) => {
    tracker++
    const box = event.target.textContent
    const index = Number(event.target.id)
    container[index]?null:container[index] = box
    
    // checkHorizontal(index)
    // checkVertical(index)
    // checkDiagonal(index)
   
    checkWinner(index)
    checkDraw(tracker)
    console.log(won)
    console.log(tracker)
  
   
}

boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>updateBox(box,index))
    box.addEventListener('click',checkWin)

})



const displaywinner = (index) => {
    
   
    if(container[index] === 'x'){
        console.log('x')
        h1.textContent = 'player-X Won'
    }else if(container[index] === 'o'){
        console.log('o')
        h1.textContent = 'Player-O Won'
    }
    
   output.style.display = 'flex'

    replay.addEventListener('click',()=>location.reload())
}

const checkDraw = (tracker) => {
    if(tracker === 9 && won === false){
        console.log('draw')
        h1.textContent = 'draw'
        output.style.display = 'flex'
        replay.addEventListener('click',()=>location.reload())
    }
}



const computer = (square,index) => {
    value = weapon
    
    if(value === 'x') {
        o.classList.add('active')
        x.classList.remove('active')
        console.log(x)
    }else{
        o.classList.remove('active')
        x.classList.add('active')
    }
    console.log(value)
    value === 'x'?computerWeapon = 'o':computerWeapon = 'x'
 
    square.textContent = value
    square.textContent = computerWeapon
    square.style.pointerEvents = 'none'
   
    
}
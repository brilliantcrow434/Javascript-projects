const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
canvas.width = 485
canvas.height = 300


//create player
class Player{
    constructor(){
        this.x = canvas.width/2 - 45
        this.y = canvas.height - 50
        this.width = 90
        this.height = 15
        this.speed = 0
    }
    draw(){
        context.fillStyle = 'black'
        context.fillRect(this.x,this.y,this.width,this.height)
    }
    update(){
        
       this.draw()
       this.x +=this.speed
        
    }
}


const player = new Player()
player.draw()

//player movement
addEventListener('keydown',({keyCode})=>{
    if(keyCode === 37){
        player.speed -=5
        
    }
    if(keyCode === 39){
        player.speed +=5
       
        
    }
})

addEventListener('keyup',({keyCode})=>{
   if(keyCode === 37){
       player.speed = 0
   }
   if(keyCode === 39){
       player.speed = 0
   }
})


//ball class
class Ball{
    constructor(){
        this.x = canvas.width/2
        this.y = canvas.height/2
        this.radius = 12
        this.color = `rgb(172, 26, 26)`
        this.gravity = 1
        this.speed = 1
    }

    draw(){
        context.beginPath()
        context.fillStyle = this.color
        context.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        context.fill()
    }
    update(){
        this.draw();
        this.y +=this.gravity
        this.x +=this.speed
        if(ball.y - ball.radius <= 0 || ball.y+ ball.radius >= canvas.height){
            this.gravity *=-1
            this.x +=this.speed
            this.y +=this.gravity
        }else if(ball.x + ball.radius >= canvas.width || ball.x -ball.radius <=0){
            this.speed *=-1.2
            this.x +=this.speed
            this.y +=this.gravity
        }
    }
}

const ball = new Ball()

//brick class
class Bricks{
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 90
        this.height = 20
    }
    draw(){
        context.fillRect(this.x,this.y,this.width,this.height)
    }
}
let brick1
let brick2
let brick3
let brick4
let brick5
let brick6
let brick7
let brick8
let brick9
let brick10
let brick11
let brick12
let brick13
let brick14
let brick15
const bricks = [
 brick1 = new Bricks(5,5),
 brick2 = new Bricks(100,5),
 brick3 = new Bricks(195,5),
 brick4 = new Bricks(290,5),
 brick5 = new Bricks(385,5),
 brick6 = new Bricks(385,30),
 brick7 = new Bricks(290,30),
 brick8 = new Bricks(195,30),
 brick9 = new Bricks(100,30),
 brick10 = new Bricks(5,30),
 brick11 = new Bricks(5,55),
 brick12 = new Bricks(385,55),
 brick13= new Bricks(100,55),
 brick14= new Bricks(195,55),
 brick15 = new Bricks(290,55),
 
]
console.log(bricks)
// const brickSix = new Bricks(5,5)
// const brickSeven = new Bricks(5,5)
// const brickEi = new Bricks(5,5)
// const brickOne = new Bricks(5,5)
// const brickOne = new Bricks(5,5)
// const brickOne = new Bricks(5,5)
// const brickOne = new Bricks(5,5)
// const brickOne = new Bricks(5,5)
// const brickOne = new Bricks(5,5)
// const brickOne = new Bricks(5,5)


// const brick1 = new Bricks(5,5)
// const brick2 = new Bricks(100,5)
// const brick3 = new Bricks(195,5)
// const brick4 = new Bricks(290,5)
// const brickFive = new Bricks(385,5)
// // const brickSix = new Bricks(5,5)
// // const brickSeven = new Bricks(5,5)
// // const brickEi = new Bricks(5,5)
// // const brickOne = new Bricks(5,5)
// // const brickOne = new Bricks(5,5)
// // const brickOne = new Bricks(5,5)
// // const brickOne = new Bricks(5,5)
// // const brickOne = new Bricks(5,5)
// // const brickOne = new Bricks(5,5)
// // const brickOne = new Bricks(5,5)


let game
const loop = () => {
    game = requestAnimationFrame(loop)
    context.clearRect(0,0,canvas.width,canvas.height)
    player.update() 
    ball.update() 
    bricks.forEach(brick =>{
        brick.draw()
    })

    if(player.x <=0 ){
        player.x = 0
    }else if(player.x+player.width >=canvas.width){
        player.x  = canvas.width - player.width
       
        
    }
    console.log(ball.y+ball.radius)

    if(ball.y + ball.radius === player.y && ball.x >= player.x && ball.x <= player.x + player.width ){
        ball.gravity = -1
        
    }
    if(ball.y + ball.radius >= canvas.height-1){
        cancelAnimationFrame(game)
        
    }

    //brick collision
    bricks.forEach((brick,index)=>{
        if(ball.y === brick.y+brick.height && ball.x >= brick.x && ball.x<= brick.x+brick.width){
            
            bricks.splice(index,1)
            brick.draw()
           
            
            console.log(bricks)
        }
    })
    
    if(bricks.length === 0){
       document.querySelector('.output').style.display = 'block'
       cancelAnimationFrame(game)
    }
}

loop()
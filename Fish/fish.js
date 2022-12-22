//canvas setup
const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
canvas.width = 300
canvas.height = 200
let score = 0
let geoFrame = 0
context.font = '50px Georgia'

//mouse interactivity
const canvasPosition = canvas.getBoundingClientRect()
let mousePosition = {
    x:canvas.width/2,
    y:canvas.height/2,
    click:false
}

canvas.addEventListener("mousedown",(event)=>{
    mousePosition.x = event.clientX - canvasPosition.left
    mousePosition.y = event.clientY - canvasPosition.top
    mousePosition.click = true
})

canvas.addEventListener('mouseup',()=>{
    mousePosition.click = false
    console.log('up')
})

//create player

class Player{
    constructor(){
        this.x = canvas.width/2
        this.y = canvas.height/2
        this.radius = 50
        this.framex = 0
        this.framey = 0
        this.frame = 0
        this.spriteWidth = 400
        this.spriteHeight = 300
    }
    update(){
        const dx = this.x - mousePosition.x
        const dy = this.y - mousePosition.y
        if(this.x !== mousePosition.x){
            this.x -= dx/30 
        }
        if(this.y !== mousePosition.y){
            this.y -=dx/30
        }
    }
    draw(){
        if(mousePosition.click){
            context.beginPath()
            context.lineWidth = 0.2
            context.moveTo(this.x,this.y)
            context.lineTo(mousePosition.x,mousePosition.y)
            console.log('hie')
        }
        context.fillStyle = 'red'
        context.beginPath()
        context.arc(this.x,this.y,this.radius,0,Math.PI*2)
        context.fill()
        context.closePath()
        context.fillRect(this.x,this.y,this.radius,10)
    }
}

const player = new Player()


//bubbles
//animation loop
const animate = () => {
    context.clearRect(0,0,canvas.width,canvas.height)
    player.update()
    player.draw()
    requestAnimationFrame(animate)
}
animate()
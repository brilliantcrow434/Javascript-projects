const canvas = document.getElementById('canvas')
canvas.width = 1024
canvas.height = 576
const context = canvas.getContext('2d')
const over = document.querySelector('.over')

//importing images
const platform = new Image()
platform.src = 'img/platform.png'


const background = new Image()
background.src = 'img/background.png'


const hill = new Image()
hill.src = 'img/hills.png'
context.drawImage(hill,50,80)


//create player



const gravity = 0.3
class Player{
    constructor(){
        this.position = {
            x:100,
            y:100,
        }
        this.velocity = {
            x:0,
            y:0
        }
        this.speed = 10
        this.width = 50
        this.height = 50
    }
    draw(){
        context.fillStyle = 'red'
        context.fillRect(this.position.x, this.position.y,this.width,this.height)

    }
    update(){
        this.draw()
        this.position.x +=this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity
        }
    }
}

//create platform
class Platform{
    constructor({x,y},image){
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw(){
       context.drawImage(this.image,this.position.x,this.position.y)
    }
}

//decoration class
class Decoration{
    constructor({x,y},image){
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw(){
       context.drawImage(this.image,this.position.x,this.position.y)
    }
}



const newPlayer = new Player()
let platforms = [
    new Platform({x:-1,y:canvas.height-platform.height},platform),
    new Platform({x:platform.width-3,y:canvas.height - platform.height},platform),
    new Platform({x:platform.width*2+150,y:canvas.height-platform.height},platform)
]

const decorators = [new Decoration({x:-1,y:0},background),new Decoration({x:20,y:80},hill)] 


let keys = {
    right:{
        pressed:false
    },
    left:{
        pressed:false
    }
}

//check win
let scrollOffSet = 0



const animate = () => {
    requestAnimationFrame(animate)
    context.fillStyle = 'white'
    context.fillRect(0,0,canvas.width,canvas.height)
    decorators.forEach((decorator)=>{
        decorator.draw()
    })
    platforms.forEach((platform)=>{
        platform.draw()
        
    })
  
    newPlayer.update()

    if(keys.right.pressed && newPlayer.position.x <400){
        newPlayer.velocity.x += newPlayer.speed
        
    }else if(keys.left.pressed && newPlayer.position.x > 100){
        newPlayer.velocity.x -=newPlayer.speed
    }else{
        newPlayer.velocity.x = 0
    }

    platforms.forEach((platform)=>{
        if(keys.right.pressed){
            platform.position.x -=newPlayer.speed
            decorators.forEach((decorator)=>{
                decorator.position.x -=newPlayer.speed*0.6
            })
            scrollOffSet +=newPlayer.speed
        }else if(keys.left.pressed){
            platform.position.x +=newPlayer.speed
            decorators.forEach((decorator)=>{
                decorator.position.x +=newPlayer.speed*0.6
            })
            scrollOffSet -=newPlayer.speed
        }
       
    })

    //platform collision detection
    platforms.forEach(platform => {
        if(newPlayer.position.y + newPlayer.height <= platform.position.y && newPlayer.position.y + newPlayer.height + newPlayer.velocity.y >= platform.position.y &&
            newPlayer.position.x + newPlayer.width >= platform.position.x &&
            newPlayer.position.x <= platform.width + platform.position.x){
            newPlayer.velocity.y = 0
        }
    })
    if(scrollOffSet > 3000){
        console.log('you won')
    }

    if(newPlayer.position.y > canvas.height){
        over.style.transition = '3s ease'
        over.style.opacity = 1

      document.body.addEventListener('click',()=>{
          location.reload();
      })
    }
      
}

animate()

//detecting player movement

addEventListener('keydown',({keyCode})=>{
    
    switch(keyCode){
        case 65:
            newPlayer.velocity.x -=1
            keys.left.pressed = true
        break
        case 68:
            newPlayer.velocity.x +=1
            keys.right.pressed = true
        break
        case 87:
           newPlayer.velocity.y -= 10
    }
})

addEventListener('keyup',({keyCode})=>{
    switch(keyCode){
        case 65:
            newPlayer.velocity.x = 0
            keys.left.pressed = false
        break
        case 68:
            newPlayer.velocity.x = 0
            keys.right.pressed = false
        break
       
}
})


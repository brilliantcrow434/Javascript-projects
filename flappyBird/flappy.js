const canvas = document.getElementById('canvas')
canvas.width = 1080
canvas.height = 576
const context = canvas.getContext('2d')

//getting images



//player class

class Player{
    constructor(x,y,width,height){
       
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.gravity = 1
    
    }
    draw(){
       this.y +=this.gravity
       context.fillStyle = 'blue'
       context.fillRect(this.x,this.y,this.width,this.height)
    }
    update(){
        this.draw()
        this.y +=this.gravity
    }
}



//ground class
class Ground{
    constructor(x){
       
        this.x = x
        this.y = canvas.height-95
        this.width = 50000
        this.height = 100
    }
    draw(){
        context.fillStyle = 'brown'
        context.fillRect(this.x,this.y,this.width,this.height)
    }
}

//obstacle class

class Obstacle{
    constructor(x,height,y){
        this.x = x
        this.height = height
        this.y = y 
        this.width = 20
    }
    draw(){
        context.fillStyle = 'green'
        context.fillRect(this.x,this.y,this.width,this.height)
    }
   
}


//generate obstacle 

const obstacleBottom = [new Obstacle(500,-250,canvas.height),new Obstacle(700,-250,canvas.height),new Obstacle(950,-250,canvas.height)]

const obstacleTop = [new Obstacle(500,250,0),new Obstacle(700,250,0),new Obstacle(950,250,0)]

setInterval(()=>{
    
    obstacleBottom.push(new Obstacle(canvas.width,-250,canvas.height))
},3000)

setInterval(()=>{
    
    obstacleTop.push(new Obstacle(canvas.width,250,0))
},2500)
//player Movement 
addEventListener('click',()=>{
    player.y += -50
    player.update()
})

const ground = new Ground(0)

const player = new Player(100,100,40,10)

let game
const loop = () => {
    game = requestAnimationFrame(loop)
    context.fillStyle = 'white'
    context.fillRect(0,0,canvas.width,canvas.height)
    player.update()
    ground.draw()
    
    obstacleBottom.forEach((obstacle,index)=>{
        obstacle.draw()
        //move obstacle
        obstacle.x -= 1
        if(obstacle.x <= -30){
            setTimeout(()=>{
                obstacleBottom.splice(index,1)
            })
        }
        // if(player.y>=obstacle.y+obstacle.height){
        //     // obstacleBottom.splice(index+1,)
        //     cancelAnimationFrame(game)
        // }
       
    
    })

    obstacleTop.forEach((obstacle,index)=>{
        obstacle.draw()
        //move obstacle
        obstacle.x -= 1
        if(obstacle.x <= -30){
            setTimeout(()=>{
                obstacleTop.splice(index,1)
            })
        }

        //obstacle detection
        //obstacle.x >= player.x && obstacle.x <=player.x + player.width
        //or obstacle.x+obstacle.width >= player.x && obstacle.x+ obstacle.width <=player.x + player.width
        if(player.y - player.height <= obstacle.height && obstacle.x >= player.x && obstacle.x <=player.x + player.width){
            alert('dead')
            console.log(player.y,obstacle.height)
        }
    
    })
   

  
   

    
    
    
}

loop()
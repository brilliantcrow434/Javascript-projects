const canvas = document.querySelector('canvas');
canvas.width = innerWidth
canvas.height = innerHeight
const context = canvas.getContext('2d');
let score = 0
//styling scoreboard
let scoreBoard = document.querySelector('.score')
let box = document.querySelector('.container')
let finalScore = document.querySelector('h1')

//start game
const restartBtn = document.querySelector('button')
restartBtn.addEventListener('click',()=>{
    spawnEnemy()
    animate()
    box.style.display = 'none'
})

//store highScore
const highScoreEl = document.querySelector('.high-score')
const greetings = document.querySelector('.congratulation')
let highScore = 0
let newHighScore = JSON.parse(localStorage.getItem('highScore'))
console.log('newHighScore',newHighScore)
let checkHighScore = 0
console.log('checkHighScore',checkHighScore)
console.log('highScore',highScore)
highScoreEl.textContent = newHighScore


//create player class

class Player{
    constructor(x,y,radius,color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    drawPlayer(){
        context.beginPath()
        context.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        context.fillStyle = this.color
        context.fill()
    }
}

//create projectile class
class Projectile{
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y 
        this.radius = radius
        this.color = 'white'
        this.velocity = velocity
    }
    drawProjectile(){
        context.beginPath()
        context.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        context.fillStyle = this.color
        context.fill()
    }
    updateProjectile(){
        this.drawProjectile()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

//store projectiles
let projectiles = []
let enemies = []
let particles = []


//enemey class
class Enemy{
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    drawEnemy(){
        context.beginPath()
        context.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        context.fillStyle = this.color
        context.fill()
    }
    updateEnemy(){
        this.drawEnemy()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

//particle class
const friction = 0.98
class Particle{
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.alpha = 1
    }

    drawParticle(){
        context.save()
        context.globalAlpha = this.alpha
        context.beginPath()
        context.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        context.fillStyle = this.color
        context.fill()
        context.restore()
        
    }
    updateParticle(){
       
        this.drawParticle()
        this.velocity.x *= friction
        this.velocity.y *= friction
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -=0.01
        
    }
}

//spawn emenemy
const spawnEnemy = () => {

     setInterval(()=>{
        let radius = (Math.random()*30)+10
        const a = Math.floor(Math.random()*255)
        const b = Math.floor(Math.random()*255)
        const c = Math.floor(Math.random()*255)
        let color =   `rgb(${a},${b},${c})`
        let x
        let y
        if(Math.random() < 0.5){
          x = Math.random() < 0.5? 0-radius:canvas.width+radius
          y = Math.random()*canvas.height
        }else{
            x = Math.random()*canvas.width
            y = Math.random() < 0.5? 0-radius:canvas.height+radius
        }
        
        
        //calculate angle so enemy moves towards player
        const angle = Math.atan2((canvas.height/2)-y,(canvas.width/2)-x)

        const velocity = {
            x:Math.cos(angle),
            y:Math.sin(angle)
        }
        enemies.push(new Enemy(x,y,radius,color,velocity))
     },1000)
    }




//get center of screen
const x = canvas.width/2
const y = canvas.height/2

let player1 = new Player(x,y,30,'white')

//to stop game
let animationId

//create an animation loop
const animate = () =>{
    animationId = requestAnimationFrame(animate)
    context.fillStyle = "rgba(0,0,0,0.1)"
    context.fillRect(0,0,canvas.width,canvas.height)
    player1.drawPlayer()
    particles.forEach((particle,index)=> {
        if(particle.alpha <=0){
            particles.splice(index,1)
        }else{
        particle.updateParticle()
        }
    })
    projectiles.forEach((projectile,index)=>{
        projectile.updateProjectile()
        //for removing unnecessary particles
        if(projectile.x  + projectile.radius < 0 || 
            projectile.x - projectile.radius > canvas.width || 
            projectile.y + projectile.radius < 0 || 
            projectile.y - projectile.radius > canvas.height){
            setTimeout(()=>{
                projectiles.splice(index,1)
            })
        }
    })
    enemies.forEach((enemy,index) => {
          enemy.updateEnemy()
          //for ending game
          const dist = Math.hypot(player1.x - enemy.x,player1.y - enemy.y)
          if(dist - enemy.radius - player1.radius < 1){
              cancelAnimationFrame(animationId)
              box.style.display = "flex"
              scoreBoard.textContent = score
              finalScore.textContent = score
              if(score > highScore){
                  highScore = score
              }
              if(highScore > newHighScore){
                  greetings.style.display = 'block'
                setTimeout(()=>{
                    greetings.style.display = 'none'
                },3000)
                checkHighScore = highScore
                highScoreEl.textContent = highScore
              localStorage.setItem('highScore',JSON.stringify(checkHighScore))}
              restartBtn.addEventListener('click', ()=>{
                location.reload()
              })
          }
          projectiles.forEach((projectile,projectileIndex) =>{
          const dist = Math.hypot(projectile.x-enemy.x,projectile.y-enemy.y)
           //when projectile hits enemy

           if(dist - enemy.radius - projectile.radius < 1){
              
                for(let i=0; i<5; i++){
                    particles.push(new Particle(projectile.x,projectile.y,(Math.random()*3)+1,enemy.color,velocity={
                        x:(Math.random()-0.5)*5,
                        y:(Math.random()-0.5)*5
                    })
                    )
                }
                   

               if(enemy.radius - 10 > 8){
                   enemy.radius -=10
                   setTimeout(()=>{
                    projectiles.splice(projectileIndex,1)
                    score +=25
                    scoreBoard.textContent = score
                   })
               }else{
               setTimeout(()=>{
                enemies.splice(index,1)
                projectiles.splice(projectileIndex,1)
                score +=100
                scoreBoard.textContent = score
               })
            }
           } 
       })
   
    })

}

window.addEventListener('click',(event)=>{
    const angle = Math.atan2(event.clientY-(canvas.height/2),event.clientX-(canvas.width/2))
    
    const velocity = {
        x:Math.cos(angle)*4,
        y:Math.sin(angle)*4
    }
    projectiles.push(new Projectile(canvas.width/2,canvas.height/2,5,'red',velocity))

})




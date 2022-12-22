const canvas = document.getElementById('canvas')


const context = canvas.getContext('2d')

//player
class Player{
    constructor(){
        this.x = 100
        this.y = 100
        this.radius = 8
        this.color = 'red'
    }

    drawPlayer(){
        context.beginPath()
        context.lineTo(this.x,this.y)
        context.lineWidth  = 9
        context.moveTo(100,200)
        context.fillStyle = this.color
        context.fill()
    }

    update(){
        this.x += player.velocity.x
        this.y +=player.velocity.y
        this.draw()
    }
}

const player = new Player()

player.drawPlayer()
// //player movement
// addEventListener('keydown',({keyCode})=>{
//     console.log(keyCode)
//     switch(keyCode){
//         case 37:
//             player.velocity.x -=0.2
//             player.update()
//             break
//         case 39:
//             player.velocity.x +=0.2
//             player.update()
//             break
//         case 38:
//             console.log('up')
//             player.velocity.y -=0.2
//             player.update()
//             break
//         case 40:
//            player.velocity.y +=0.2
//            player.update()
        
//     }
// })




// const animate = () => {
//     let game = requestAnimationFrame(animate)
//     context.clearRect(0,0,canvas.width,canvas.height,)
//     player.update()

//     //check for collision

//     if(player.x+player.width>= canvas.width || player.x <=0 || player.y + player.height >= canvas.height || player.y <=0){
      
//         console.log('dead')
//         cancelAnimationFrame(game)
//     }
// }

// animate()
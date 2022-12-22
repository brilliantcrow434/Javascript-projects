const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player{
    constructor(){
        this.position = {
            x:20,
            y:20
        }

        this.velocity = {
            x:10,
            y:10
        }

        //this.image
        this.width = 100
        this.height = 100
    }
    draw(){
        context.fillStye = 'red'
        context.fillRect(this.position.x,this.position.y,this.width,this.height)
        
    }
}

const player = new Player()
player.draw()
console.log(player)
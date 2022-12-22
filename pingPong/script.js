const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const playerOneScore = document.getElementById('player-one')
const playerTwoScore = document.getElementById('player-two')
const output = document.querySelector('.output')
const outputText = document.querySelector('h1')
//score keeping
let player1Score = 0
let player2Score = 0
canvas.width = 300
canvas.height = 30

// create ball class

class Ball {
    constructor(){
        this.x = canvas.width/2
        this.y = canvas.height/2
        this.radius = 8
        this.color = 'white'
        this.gravity = 1
        this.speed = -1
    
    }
    draw(){
        context.beginPath()
        context.fillStyle = this.color
        context.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        context.fill()
    }
    update(){
        
    }
}
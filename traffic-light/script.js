const circleOne = document.querySelector('.circle-one')
const circleTwo = document.querySelector('.circle-two')
const circleThree = document.querySelector('.circle-three')

const one = setTimeout(()=>{
    circleOne.style.filter = `brightness(1)`
},1000)

const two = setTimeout(()=>{
    circleOne.style.filter = "brightness(0)"
    circleTwo.style.filter = "brightness(1)"
},2000)

const three = setTimeout(()=>{
    circleOne.style.filter = "brightness(0)"
    circleTwo.style.filter = "brightness(0)"
    circleThree.style.filter = "brightness(1)"
},3000)
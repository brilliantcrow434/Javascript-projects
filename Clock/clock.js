const hand1 = document.querySelector('.hand1')
const hand2 = document.querySelector('.hand2')
const hand3 = document.querySelector('.hand3')

const moveHand = () => {
     const now = new Date()
     let second = now.getSeconds()
     let min = now.getMinutes()
     let hour = now.getHours()
     let secondDeg = second/60*360
     let minDeg = min/60*360
     if(hour<=12){
          hourDeg = hour/12*360
     }else{
          hourDeg = (hour-12)/12*360
     }
     

     hand1.style.transform = `rotate(${hourDeg}deg)`
     hand2.style.transform = `rotate(${minDeg}deg)`
     hand3.style.transform = `rotate(${secondDeg}deg)`
}

setInterval(moveHand,1000)
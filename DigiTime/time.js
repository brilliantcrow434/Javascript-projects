const month = document.querySelector('.month')
const day = document.querySelector('.day')
const year = document.querySelector('.year')
const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.second')

let months = {
    1:'Jan',
    2:'Feb',
    3:'Mar',
    4:'April',
    5:'M',
    6:'June',
    7:'July',
    8:'Aug',
    9:'Sep',
    10:'Oct',
    11:'Nov',
    12:'Dec'
}

const update = () => {
    const now = new Date()
    let monthNow = now.getMonth()+1
    let dayNow = now.getDate()
    let yearNow = now.getFullYear()
    

    if(monthNow in months){
        month.textContent = months[monthNow]
    }
    day.textContent = dayNow
    year.textContent = yearNow

    
    
}

update()

function timeUpdate(){
      let now = new Date()
      //time
      let hourNow = now.getHours()
      let minNow = now.getMinutes()
      let secNow = now.getSeconds()

      if(minNow.toString().length <=1){
         min.textContent = `0${minNow}`
      }else{
          min.textContent = minNow
      }
      if(hourNow.toString().length === 1){
          
          hour.textContent = `0${hourNow}`
      }else{
          hour.textContent = hourNow
      }
      secNow.toString().length ===1 ? 
      sec.textContent = `0${secNow}`:sec.textContent = secNow
}

setInterval(timeUpdate,1000)



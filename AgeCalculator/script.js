const age = document.getElementById('age')
const btn = document.getElementById('btn')

const now = new Date();

btn.addEventListener('click', ()=>{
    console.log(age.value)
    const birthday = new Date(age.value)
    const totalSeconds = (now - birthday)/1000
    console.log(totalSeconds)
    const day = Math.floor((totalSeconds)/(86400))
    console.log(day)
    const month = (totalSeconds/now.getFullYear())
    console.log(month)
    const years = (birthday.getFullYear() - now.getFullYear())
    console.log(years)
    const hoursExtra = totalSeconds/3600%24
    const hours = (totalSeconds/3600 - hoursExtra) + 7
    console.log(hours)
    
})



// const currentDate = new Date()
// console.log(newYear,currentDate)
// const totalSeconds = (currentDate - newYear)/1000

// console.log(totalSeconds.toFixed(2))

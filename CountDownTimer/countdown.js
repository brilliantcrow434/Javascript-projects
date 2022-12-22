
const countDown = () => {
    const newYear = new Date('1 Jan 2022')
    const currentDate = new Date()

    const totalSeconds = (newYear - currentDate) /1000
    const days = Math.floor(totalSeconds/3600/24)
    const hours = Math.floor(totalSeconds/3600%24)
    const mins = Math.floor(totalSeconds/60)%60
    const secs = Math.floor(totalSeconds)%60

    const day = document.getElementById('days').textContent=formatTime(days)
    const hour = document.getElementById('hours').textContent=formatTime(hours)
    const min = document.getElementById('minutes').textContent=formatTime(mins)
    const sec = document.getElementById('seconds').textContent=formatTime(secs)

    
}

const formatTime = (time) => {
    return time < 10 ? `0${time}`: time
}

countDown()

setInterval(countDown,1000)
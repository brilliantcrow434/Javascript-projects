const wordLength = document.querySelector('input')
let time = document.querySelector('h1')
let sec = 0
let sentence = 'coding is the best thing that has ever happen to me other than anime,so i am grateful for that'
const timer = setInterval(()=>{
    time.textContent = sec++
    if(sec === 60){
        clearInterval(timer)
        console.log(wordLength)
    }
    console.log(wordLength.value.split(' ').length)
},1000)


console.log(wordLength)
const cards = document.querySelectorAll('.cards')
const shuffleCards = () => {
    cards.forEach(card=>{
     let randomOrder = Math.floor(Math.random()*12)
     card.style.order = randomOrder
    })
 }

document.addEventListener('DOMContentLoaded',shuffleCards)



let isFlipped = false
let firstCard
let secondCard

let gate = false

const flip = (card) => {
    if(gate) return
   card.classList.add('flip-card')
   if(!isFlipped){
      firstCard = card
      isFlipped = true 
   }else{
        isFlipped = false
       checkMatch()
       checkDoubleClick()
   
}
}

const checkMatch = () => {
    if(firstCard.getAttribute('id') === secondCard.getAttribute('id')){
        alert('hooray, you have found a match')
    }else{
        gate = true
        setTimeout( ()=>{
         firstCard.classList.remove('flip-card')
         secondCard.classList.remove('flip-card')
        gate = false},1000)
    }
}

const checkDoubleClick = () => {
    if(firstCard.getAttribute('class') === secondCard.getAttribute('class'))
    setTimeout(()=>{
        firstCard.classList.remove('flip-card')
        secondCard.classList.remove('flip-card')
    },500)
}

cards.forEach((card)=>{
    card.addEventListener('click',()=>flip(card))
})



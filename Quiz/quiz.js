const questionsBank = [
    {
        question: 'What is the best Programming language?',
        a:'Javascript',
        b:'Python',
        c:'C++',
        d: 'none',
        correct:'d'
    },
    {
        question: 'Who won 2021 F1 World Championship?',
        a:'Lewis Hamilton',
        b:'Lando Norris',
        c:'Max Verstappen',
        d:'Yuki Tsunoda',
        correct:'c'
    },
    {
        question: 'Who is the chess World Champion?',
        a:'Andre Botez',
        b:'Magnus Carlsen',
        c:'Fabiano Carauno',
        d:'Hikaru Nakumaru',
        correct: 'b'
    }
]

// for keeping track of which question to display
let questionNumber = 0
console.log(questionNumber)

let score = 0

//populating the screen
const loadQuiz = () => {
    const questionA = document.getElementById('a_quest'). textContent = questionsBank[questionNumber].a

    const questionB = document.getElementById('b_quest'). textContent = questionsBank[questionNumber].b

    const questionC = document.getElementById('c_quest'). textContent = questionsBank[questionNumber].c

    const questionD = document.getElementById('d_quest'). textContent = questionsBank[questionNumber].d

    const question = document.querySelector('h2').textContent = questionsBank[questionNumber].question
}

// function getQuestion(questionsBank){
    
    
// }

// console.log(getQuestion(questionsBank))
// console.log(question)
console.log(questionNumber)

//next button function for changing question
const changeQuestion = () => {
    questionNumber++
    loadQuiz()
}

//get the next button and use it to change question
const nextBtn = document.getElementById('next')
nextBtn.addEventListener('click',changeQuestion)

//dummy variable for storing answer


const getSelected = () => {
    const answerEl = document.querySelectorAll('.answers')
    let answer = undefined
    answerEl.forEach((element)=>{
        if(element.checked){
           answer = element.id
    }
    
})
  return answer  
}

//check if response is correct
const checkAnswer = () => {
    
    const answer = getSelected()
    // console.log(questionsBank[questionNumber].correct)
    // console.log(answer)
    if(answer === questionsBank[questionNumber].correct){
        score +=1
        console.log('yeah',score)
    }else{
        console.log('nahh')
    }
}

// let num = 0

// const increment = (num) => {
//     return ++num
// }

// console.log(increment(num))

//checking question
const check = document.getElementById('validator')
check.addEventListener('click',()=>{
    checkAnswer()
    questionNumber++
    questionNumber >= questionsBank.length? afterLife():loadQuiz()
    const answer = getSelected()

    
})

const afterLife = () => {
  
        const questionA = document.getElementById('a_quest').style.display = 'none'

        const questionB = document.getElementById('b_quest').style.display = 'none'
    
        const questionC = document.getElementById('c_quest').style.display = 'none'
    
        const questionD = document.getElementById('d_quest').style.display = 'none'
    
        const question = document.querySelector('h2').textContent = 'Quiz Finished'
        const radios = document.querySelectorAll('.answers')
        radios.forEach(ques => ques.style.display = 'none')

        const inform = document.querySelector('h3')
        inform.textContent += ` ${score} out of ${questionsBank.length}`
        inform.style.display = 'block'
        

        const buttons = document.querySelectorAll('button')
        buttons.forEach(btn =>btn.style.display = 'none')
        const reload = document.getElementById('reload')
        console.log(reload)
        reload.style.display = 'block'
        reload.addEventListener('click',()=>location.reload())

}



loadQuiz()

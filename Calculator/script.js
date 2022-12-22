const displayOne = document.querySelector('.display-one')
const displayTwo = document.querySelector('.display-two')
const displayThree = document.querySelector('.display-three')


const operation = document.querySelectorAll('.operation')
const numbers = document.querySelectorAll('.number')
const clearLast = document.querySelector('.last-entity-clear')
const clearAll  = document.querySelector('.all-clear')
const equal = document.querySelector('.equal')
const dot = document.querySelector('.dot')

let dis1 = ''
let dis2 = ''
let dis3 = null
let lastOperation = ''
let hasDot = false

numbers.forEach((number)=>{
    number.addEventListener('click',(event)=>{
        // if(event.target === '.' && !haveDot){
        //     haveDot = true
        // }else if(event.target.innerText === '.' && haveDot){
        //     return
        // }
        if(event.target.innerText === '.' && !hasDot){
            hasDot = true  
        }else if(event.target.innerText ==='.' && hasDot){
            return
        }
       
        console.log(event.target.innerText)
        dis2 += event.target.innerText
        displayTwo.textContent = dis2
    })
})


operation.forEach(operator => {
    operator.addEventListener('click',(event)=>{
        if(!dis2) return
        haveDot = false
        const operationName = event.target.textContent
        if(dis1 && dis2 && lastOperation){
            mathOperation()
        }else{
            dis3 = parseFloat(dis2)
        }
        lastOperation = operationName
        clearDis(operationName)
        console.log(dis3)
    })
})


const clearDis = (opName) => {
    console.log(opName)
    dis1 = dis2 +  ' ' + opName + ' '
    displayOne.textContent = dis1
    dis2 = ''
    displayTwo.textContent = ''
    displayThree.textContent = dis3
}

const mathOperation = () => {
    if(lastOperation === 'X'){
        dis3 = parseFloat(dis3) * parseFloat(dis2)
    }else if(lastOperation === '+'){
        dis3 = parseFloat(dis3) + parseFloat(dis2)
    }
    else if(lastOperation === '/'){
        dis3 = parseFloat(dis3) / parseFloat(dis2)
    }
    else if(lastOperation === '-'){
        dis3 = parseFloat(dis3) - parseFloat(dis2)
    }
    else if(lastOperation === '%'){
        dis3 = parseFloat(dis3) % parseFloat(dis2)
    }
}

equal.addEventListener('click',(event)=>{
    if(!dis1||!dis2) return
    hasDot = false
    mathOperation()
    displayTwo.textContent = dis3
    dis3.textContent = ''
    dis2 = dis3
    displayThree.textContent = ''
})

clearAll.addEventListener('click',()=>{
    dis1 = ''
    dis2 = ''
    dis3 = ''
    displayThree.textContent = ''
    displayTwo.textContent = ''
    displayOne.textContent = ''
})

clearLast.addEventListener('click',()=>{
    dis2 = ''
    displayTwo.textContent = ''
})
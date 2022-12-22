const generateEl = document.getElementById('generate')
const pwEl = document.getElementById('password')
const copyEl = document.getElementById('copy')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const symbolEl = document.getElementById('symbol')
const numberEl = document.getElementById('number')

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbol = "~`!@#$%^&*()_+=-/\><.?'\","

const getUpperCaseLetter = () => {
    return upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)]
}

const getLowerCaseLetter = () => {
    return lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)]
}

const getNumber = () => {
    return numbers[Math.floor(Math.random()*numbers.length)]
}

const getSymbol = () => {
    return symbol[Math.floor(Math.random()*symbol.length)]
}


function generatePassword(){
    const len = lengthEl.value

    let password = ""

    for(let i=0; i<len; i++){
        const x = generateX()
        password +=x
    }

    pwEl.textContent = password
}

function generateX(){
    const xs = []
    if(upperEl.checked){
        xs.push(getUpperCaseLetter())
    }
    if(lowerEl.checked){
        xs.push(getLowerCaseLetter())
    }
    if(numberEl.checked){
        xs.push(getNumber())
    }
    if(symbolEl.checked){
        xs.push(getSymbol())
    }
    if(xs.length === 0) return ''
    return xs[Math.floor(Math.random()*xs.length)]
}

generateEl.addEventListener('click',generatePassword)

copyEl.addEventListener('click',()=>{
    const textArea = document.createElement('textarea')

    const finalPassword = pwEl.textContent
    if(!finalPassword){return}
    textArea.value = finalPassword

    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alert('password copied to clipboard')
})
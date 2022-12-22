let state = {
    balance: 500,
    income: 1200,
    expenses: 200,
    transaction:[
        {name:'salary',amount:500,type:'income'},
        {name:'grocery',amount:5000,type:'expense'}
    ]
}

const balanceEl = document.querySelector('#balance')
const incomeEl = document.querySelector('#income')
const expenseEl = document.querySelector('#expenses')
const transactionEl = document.querySelector('.history-list')

const init = () => {
    balanceEl.textContent = state.balance
    incomeEl.textContent = state.income
    expenseEl.textContent = state.expenses
    
    for(let i=0; i< state.transaction.length; i++){
        console.log(transactionEl)
        let transactionDiv = document.createElement('div')
        let transactionList = document.createElement('li')
        let transactionSpan = document.createElement('span')
        let transactionButton = document.createElement('button')
        transactionButton.textContent = 'X'
        transactionSpan.setAttribute('class',`${state.transaction[i].type}-amount`)
        transactionSpan.textContent = `$${state.transaction[i].amount}`
        transactionSpan.appendChild(transactionButton)
        transactionList.textContent = state.transaction[i].name
        transactionDiv.appendChild(transactionList)
        transactionDiv.appendChild(transactionSpan)
        transactionDiv.setAttribute('class','history')
        transactionEl.appendChild(transactionDiv)
        console.log(transactionSpan)
    }

    balanceEl.textContent = `${Number(incomeEl) - Number(expenseEl}`)
}



const incomeBtn = document.querySelector('#income-btn')
const expenseBtn = document.querySelector('#expense-btn')
const nameOfTransaction = document.querySelector('#transaction-name')
const amount = document.querySelector('#amount')


const add = (event) => {
    event.preventDefault()
    incomeEl.textContent = Number(incomeEl.textContent) + Number(amount.value)
    console.log(state.income)
    console.log(amount.value)
    console.log(incomeEl.textContent)
    let transactionDiv = document.createElement('div')
    let transactionList = document.createElement('li')
    let transactionSpan = document.createElement('span')
    let transactionButton = document.createElement('button')
    transactionButton.textContent = 'X'
    transactionSpan.setAttribute('class','income-amount')
    transactionSpan.textContent = amount.value
    transactionSpan.appendChild(transactionButton)
    transactionList.textContent = nameOfTransaction.value
    transactionDiv.appendChild(transactionList)
    transactionDiv.appendChild(transactionSpan)
    transactionDiv.setAttribute('class','history')
    transactionEl.appendChild(transactionDiv)
}

const sub = (event) => {
    event.preventDefault()
    expenseEl.textContent = Number(expenseEl.textContent) + Number(amount.value)
    let transactionDiv = document.createElement('div')
    let transactionList = document.createElement('li')
    let transactionSpan = document.createElement('span')
    let transactionButton = document.createElement('button')
    transactionButton.textContent = 'X'
    transactionSpan.setAttribute('class','expense-amount')
    transactionSpan.textContent = amount.value
    transactionSpan.appendChild(transactionButton)
    transactionList.textContent = nameOfTransaction.value
    transactionDiv.appendChild(transactionList)
    transactionDiv.appendChild(transactionSpan)
    transactionDiv.setAttribute('class','history')
    transactionEl.appendChild(transactionDiv)
}

incomeBtn.addEventListener('click',add)
expenseBtn.addEventListener('click',sub)

init()
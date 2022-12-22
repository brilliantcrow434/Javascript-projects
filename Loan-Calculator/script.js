const amount = document.getElementById('amount')
const interest = document.getElementById('interest')
const year = document.getElementById('year')
const calculateBtn = document.getElementById('calculate')
const monthly = document.getElementById('monthly-payment')
const totalAmount = document.getElementById('total-amount')
const totalInterest = document.getElementById('total-interest')

const calculateResults = (event) => {
    event.preventDefault() 
    const x = (1 + interest.value/100)
    const total = Math.pow(x,year.value) * amount.value
    totalAmount.value = total
    monthly.value = total/12
    totalInterest.value = `${total - amount.value}`


}

calculateBtn.addEventListener('click',calculateResults)


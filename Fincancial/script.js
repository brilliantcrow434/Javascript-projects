//input money
//living expense
//savings
//investment
//enjoyment
//earning/hour
//earning/week
//earing/living

/*
  <li>lifeStyle Cost: 8000 </li>
                <li>Play Money: </li>
                <li>Feel Good Money: </li>
                <li>InvestMent: </li>
                <li>Savings: </li>
                <li>Earning/hour: </li>
                <li>Earning/week: </li>
                <li>Earning/Living: </li>
                <li>Freedom Money: </li>
*/

let lifeStyleCost
let playMoney
let feelGood
let investment
let Savings
let earningHour
let earningWeek
let earningLivning
let freedomMoney


const list = document.getElementById('list')
const CalculateBtn = document.getElementById('check')

const updateEarning = (amount) => {
    const monthly = document.getElementById('month').value
    lifeStyleCost = monthly * 0.5.toFixed(2)
    playMoney = monthly - lifeStyleCost.toFixed(2)
    feelGood = playMoney * 0.15.toFixed(2)
    investment = playMoney * 0.15.toFixed(2)
    savings = playMoney * 0.20.toFixed(2)
    earningHour = ((monthly/30)/24).toFixed(2)
    earningWeek = (monthly/4).toFixed(2)
    earningLiving = (monthly/8760).toFixed(2)
    freedomMoney = (2 * lifeStyleCost).toFixed(2)

    createBox(lifeStyleCost,playMoney,feelGood,investment,savings,earningHour,earningWeek,earningLivning,freedomMoney)
}

const createBox = (lifeStyleCost,playMoney,feelGood,investment,savings,earningHour,earningWeek,earningLivning,freedomMoney) => {
    //create list
    const lysty = document.createElement('li')
    lysty.textContent = `LifeStyle Cost: ${lifeStyleCost}`
    const play = document.createElement('li')
    play.textContent = `Play Money: ${playMoney}`
    const feel = document.createElement('li')
    feel.textContent = `Feel Good Money: ${feelGood}`
    const invest = document.createElement('li')
    invest.textContent = `InvestMent: ${investment}`
    const save = document.createElement('li')
    save.textContent = `Savings: ${savings}`
    const earnH = document.createElement('li')
    earnH.textContent = `Earning/hour: ${earningHour}`
    const earnW = document.createElement('li')
    earnW.textContent = `Earning/Week: ${earningWeek}`
    const live = document.createElement('li')
    live.textContent = `Earning/Living: ${earningLiving}`
    const free = document.createElement('li')
    free.textContent = `Freedom Money: ${freedomMoney}`
    list.append(lysty,play,feel,invest,save,earnH,earnW,live,free)
}

CalculateBtn.addEventListener('click',updateEarning)


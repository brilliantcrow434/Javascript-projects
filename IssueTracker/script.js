const description = document.getElementById('issue-description')
const level = document.getElementById('issue-level')
const role = document.getElementById('assign-description')
const addBtn = document.querySelector('.btn')
const issueList = document.querySelector('.issue-list')
console.log(level.value)

let pastIssues = JSON.parse(localStorage.getItem('issueList'))
console.log(pastIssues)
if(pastIssues){
    pastIssues.forEach((prob)=>{
        issueList.append(prob)
        
    })
}
let issues = []
const addIssue = (event) => {
    event.preventDefault()
    let divHolder = document.createElement('div')
    divHolder.setAttribute('class','issue-box')
    issueList.appendChild(divHolder)
    let status = document.createElement('h3')
    status.textContent = 'open'
    let problem = document.createElement('p')
    problem.textContent = description.value
    let levelProb = document.createElement('h4')
    levelProb.textContent = level.value
    let respondent = document.createElement('h4')
    respondent.textContent = role.value
    let closeBtn = document.createElement('button')
    closeBtn.textContent = 'close'
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'delete'
    divHolder.appendChild(status)
    divHolder.appendChild(problem)
    divHolder.appendChild(levelProb)
    divHolder.appendChild(respondent)
    divHolder.appendChild(closeBtn)
    divHolder.appendChild(deleteBtn)
    console.log(divHolder)
    issues.push(divHolder)
    console.log(issues)
    localStorage.setItem('issueList',JSON.stringify(issues))
}

addBtn.addEventListener('click',(event)=> addIssue(event))


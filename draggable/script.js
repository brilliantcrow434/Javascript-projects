const draggable = document.querySelector('.draggable')
const checkBtn = document.querySelector('.check')

const richestPeople = [
    'elon Musk',
    'jeff Bezos',
    'Arnault Bernard',
    'Mark Zuckerberg',
    'Michael bloomberg',
    'warren Buffet',
    'larry Page',
    'larry Ellison',
    'Carlos slim',
    'jack ma'
]

const listItems = []

let dragStartIndex
let dragEndIndex


const createList = () => {
    [...richestPeople]
    .map(person => ({value:person, sort:Math.random()}))
    .sort((a,b)=>a.sort-b.sort)
    .map(person => person.value)
    .forEach((person,index)=>{
        const listItem = document.createElement('li')
        listItem.setAttribute('data-index',index)
       

        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="drag" draggable="true">
            <p class="person">${person}</p>
            </div>
        `
        listItems.push(listItem)
    
        draggable.appendChild(listItem)

        
    })
}

createList()

const swap = (a,b) => {
    itemOne = dragItems[a]
    itemTwo = dragItems[b]
    dragItems[a].appendChild(itemTwo) 
    dragItems[b].appendChild(itemOne)
}

function dragStart(index){
    dragStartIndex = index
    
}
function dragEnter(){
    // console.log('enter')
}

function dragOver(event){
    // console.log('over')
    event.preventDefault()
}

function dragLeave(){
    // console.log('leave')
}

function dragDrop(index){
    dragEndIndex = index
    swap(dragStartIndex,dragEndIndex)
}

const dragItems = document.querySelectorAll('.drag')
dragItems.forEach((item,index)=>{
   item.addEventListener('dragstart',()=>dragStart(index))
   item.addEventListener('dragenter',dragEnter)
   item.addEventListener('dragover',dragOver)
   item.addEventListener('dragleave',dragLeave)
   item.addEventListener('drop',()=>dragDrop(index))
})
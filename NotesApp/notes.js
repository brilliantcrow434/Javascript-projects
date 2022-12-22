//cont get add button
const add = document.getElementById('add')

//get notes from textbox
const note = document.getElementById('notes')
const main = document.querySelector('.main')

//search name
let item


const addNote = () => {
    main.style.display = 'block'
}

const save = () => {
    item = prompt('what would you like to name your file')
    let yourNote = note.value
    console.log(yourNote)
    note.value = ''
    // note.style.display = 'none'

    const noteBook = document.querySelector('.cards')
    let card = document.createElement('div')
    let options = document.createElement('div')
    let noteSection = document.createElement('div')
    let deleteBtn = document.createElement('button')
    let editBtn = document.createElement('button')
    deleteBtn.textContent = 'del'
    deleteBtn.setAttribute('id', 'del')
    editBtn.textContent = 'edit'
    // card.setAttribute('class','layout')
    // card.setAttribute('id',item)
    noteSection.setAttribute('class','note-section')
    options.setAttribute('class','options')
    let title = document.createElement('h2')
    let info = document.createElement('textarea')
    info.setAttribute('class','note-text')
    title.textContent = item
    info.textContent = yourNote
    noteSection.appendChild(info)
    options.appendChild(title)
    options.appendChild(editBtn)
    options.appendChild(deleteBtn)
    card.appendChild(options)
    card.appendChild(noteSection)
    noteBook.appendChild(card)

    let cardsList = []
    const cards = document.querySelectorAll('.note-section')
    cards.forEach((card)=>{
        console.log(card)
    })
   
    
    
}


add.addEventListener('click',addNote)

const searchItem = () => {
 
    item = prompt('what are you searching for today')
    console.log(localStorage.getItem(item))
}


//get save button
const saveBtn = document.getElementById('save')
saveBtn.addEventListener('click',save)

//implementing search
const search = document.getElementById('search')
search.addEventListener('click',searchItem)


//store

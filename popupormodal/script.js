const find = document.querySelector('.find');
const close = document.querySelector('.close-modal')
const section = document.querySelector('section')

find.addEventListener('click',()=>{
    section.style.display = 'block'
    find.style.display = 'none'
})

close.addEventListener('click', ()=>{
    section.style.display = 'none'
    find.style.display = 'block'
})
const webName = document.getElementById('site-name')
const webUrl = document.getElementById('site-url')
const submitBtn = document.getElementById('btn')
const bookMarkHolder = document.querySelector('.bookmarks')

document.addEventListener('DOMContentLoaded',()=>fetchBookMark())




let bookMarks
let bookMark
const addUrl = (event) => {
    event.preventDefault()
    if(!webName.value || !webUrl.value){
        alert('please fill in the form')
        return false
    }
    bookMark = {
        siteName:webName.value,
        siteUrl:webUrl.value
    }
  
    if(localStorage.getItem('book-marks') === null){
        bookMarks = []
        bookMarks.push(bookMark)

        localStorage.setItem('book-marks',JSON.stringify(bookMarks))
    }else{
        let previousBookMark = JSON.parse(localStorage.getItem('book-marks'))
        bookMarks = [...previousBookMark,bookMark]
        localStorage.setItem('book-marks',JSON.stringify(bookMarks))
    
        
    }
    webUrl.value = ''
    webName.value = ''
   addBookMark(bookMark)
}

const fetchBookMark = () =>{
    let items = JSON.parse(localStorage.getItem('book-marks'))
    console.log('here')
    console.log(items)
    items.forEach((item,id)=>{
      
        let bookHolder = document.createElement('div')
        bookHolder.setAttribute('class','book')
        let name = document.createElement('h2')
        let visit = document.createElement('button')
        let anchor = document.createElement('a')
        anchor.setAttribute('href',item.siteUrl)
        anchor.setAttribute('target','blank')
        anchor.textContent = 'visit'
        visit.appendChild(anchor)
        console.log(visit)
        visit.addEventListener('click',()=>{
            console.log(item.siteUrl)
        })
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'delete'
        deleteBtn.addEventListener('click',()=>{
            items.splice(id,1)
            localStorage.setItem('book-marks',JSON.stringify(items))
            location.reload()
        })
        bookHolder.appendChild(name)
        bookHolder.appendChild(visit)
        bookHolder.appendChild(deleteBtn)
        name.textContent = item.siteName
        bookMarkHolder.appendChild(bookHolder)
    })

}

const addBookMark = (marks) =>{
        let bookHolder = document.createElement('div')
        bookHolder.setAttribute('class','book')
        let name = document.createElement('h2')
        let visit = document.createElement('button')
        visit.textContent = 'visit'
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'delete'
        bookHolder.appendChild(name)
        bookHolder.appendChild(visit)
        bookHolder.appendChild(deleteBtn)
        name.textContent = marks.siteName
        bookMarkHolder.appendChild(bookHolder)

}



submitBtn.addEventListener('click',addUrl)
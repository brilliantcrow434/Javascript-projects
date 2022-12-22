const form = document.querySelector('form')
const todo = document.getElementById('input')
const todoList = document.querySelector('.todo-list')

const stackTodo = JSON.parse(localStorage.getItem('ulTodos'))


const updateTodo = () => {
    const liEl = document.querySelectorAll('li')
    const todoLi = []
    liEl.forEach(todo=>{
        todoLi.push({
            text:todo.textContent,
            completed:todo.classList.contains('completed')
        })
    })
    localStorage.setItem('ulTodos',JSON.stringify(todoLi))
}

const addTodo = (item) => {
    let todoItem = todo.value
     //insert todo into html
     if(item){
     const list = document.createElement('li')
     list.textContent = item.text
     if(item && item.completed){
         list.classList.add('completed')
     }
     list.addEventListener('click', () =>{
         list.classList.toggle('completed')
         updateTodo()
     })
     list.addEventListener('contextmenu',()=>{
         list.remove()
         updateTodo()
     })
     todoList.appendChild(list)
     todo.value = ''
     
    updateTodo()
     }else{
        const list = document.createElement('li')
        list.textContent = todoItem
        list.addEventListener('click', () =>{
            list.classList.toggle('completed')
            updateTodo()
        })
        list.addEventListener('contextmenu',()=>{
            list.remove()
            updateTodo()
        })
        todoList.appendChild(list)
        todo.value = ''
     }
}

if(stackTodo){
    stackTodo.map(todo=>{
        addTodo(todo)
    })
}

const handleSubmit = (event) => {
    event.preventDefault()
     addTodo()
}





form.addEventListener('submit',(event)=>handleSubmit(event))



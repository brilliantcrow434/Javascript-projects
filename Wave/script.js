const container = document.querySelector('.container');

//create circle
let circlesArray = []
const createCircle = () => {
    for (let i=0; i<256; i++){
        const circle = document.createElement('div')
        circle.setAttribute('class','circle')
        container.appendChild(circle)
        circlesArray.push(circle)
    }
}

createCircle()

circlesArray.forEach((circle,index)=>{
    circle.addEventListener('click', ()=>{
        if(!circle.classList.contains('grow')){
            circle.classList.add('grow')
            console.log(circle)
            setTimeout(()=>{
                for(let i=0; i<256; i++){
                    circlesArray[index + 1].classList.add('grow')
                    circlesArray[index -1].classList.add('grow')
                    circlesArray[index + 16].classList.add('grow')
                    circlesArray[index - 16].classList.add('grow')
                }
             
            },100)
         
        }
    })
})
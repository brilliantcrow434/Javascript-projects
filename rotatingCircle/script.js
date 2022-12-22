const circles = document.querySelectorAll('.circle')

circles.forEach((circle,index)=>{
    circle.style.borderWidth = (index + 1) * 10 + 'px'
    circle.style.zIndex = -1
    circle.style.animationName = `rotate-${index}`
    
    const deg = (index+1)*360

    const style = document.createElement('style')

    style.innerText = `
    @keyframes rotate-${index} {
        to{
            transform:rotate(${deg}deg);
        }
    }
    `
    document.body.appendChild(style)
})
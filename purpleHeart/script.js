

const createHeart = () => {
    const heart = document.createElement('div')
    heart.classList.add('heart')
    heart.textContent = '💜'
    heart.style.left = `${(Math.random()*90)+5}vw`
    heart.style.animationDuration = `${(Math.random()*2)+3}s`
    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove()
    },6000)
}

setInterval(createHeart,1000)
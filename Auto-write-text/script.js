const btn = document.querySelector('.btn')
const text = 'Shy-Ann is the only girl I have ever Liked'
let index = 0;
const writeText = () => {
    document.body.innerText = text.slice(0,index)
    index++
    if(index > text.length-1){
        index = 0
    }
}

setInterval(writeText,500)
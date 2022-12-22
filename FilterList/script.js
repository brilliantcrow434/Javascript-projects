const searchBtn = document.getElementById('search')

const filter = () => {
    let target = searchBtn.value.toUpperCase()
    console.log(target)
}

searchBtn.addEventListener('keyup', filter)
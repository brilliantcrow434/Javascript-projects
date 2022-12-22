const btn = document.querySelector('button')
const toast = document.querySelector('.toast')

const createNotification = () => {

    const notify = document.createElement('div')
    notify.textContent = 'Wake Up to Your...'
    console.log(notify)
    toast.appendChild(notify)
    console.log(toast)
}

btn.addEventListener('click',createNotification)
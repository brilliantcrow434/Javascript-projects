const labels= document.querySelectorAll('label')
labels.forEach(label=>{
label.textContent =  label.textContent.split('').map(letter=>
   document.createElement('span').textContent = letter).join('')
})


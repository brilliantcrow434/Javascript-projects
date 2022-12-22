// const btn = document.getElementById('change')

// function random(number){
//     return(Math.floor(Math.random()*number+1))
// }

// // const changeBackground = ()=>{
// //     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
// //     document.body.style.backgroundColor = rndCol
// // }

// //background change function using event
// function changeBackground(event){
//     const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`
//     event.target.style.backgroundColor = rndCol
//     console.log(event)
// }

// btn.addEventListener('click',changeBackground)

// // btn.removeEventListener('click',changeBackground)

// // btn.addEventListener('focus',()=>{
// //     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
// //     document.body.style.backgroundColor = rndCol
// // })

// // btn.addEventListener('blur',()=>{
// //     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
// //     document.body.style.backgroundColor = rndCol
// // })

// // btn.addEventListener('dblclick',()=>{
// //     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
// //     document.body.style.backgroundColor = rndCol
// // })

// // btn.addEventListener('mouseout',()=>{
// //     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
// //     document.body.style.backgroundColor = rndCol
// // })



// const form = document.querySelector('form')
// const fname = document.getElementById('fname')
// const lname = document.getElementById('lname')
// const para = document.querySelector('p')

// form.addEventListener('submit', event => {
//     if(fname.value === '' || lname.value === ''){
//         preventDefault()
//         para.textContent = ' you need to fill in both names!'
//         console.log('what')
//     }
// })

// alert('hi')
// const text = document.getElementById('text')
// text.addEventListener('keypress',keyDown)

// function keyDown(event){
//     // event.style.background = 'blue'
//     console.log('hi')
// }

// function hit(){
//     console.log('y')
// }
// // const btn = document.getElementById('btn')
// // btn.addEventListener('click',hit)

// document.addEventListener('Onresize',hit)






//string method
//length property returns the length of a string

//slice method returns extracts part of a string and returns the extracted part
// console.log('apple'.slice(-1,))

//substring method returns parts of a string or everything
//substr method returns part of a string

//replace method replaces a specified value with another value in a string
// const text = 'please visit rick Rick'
// let newText = text.replace(/Rick/ig,'lodie')
// console.log(newText)

//trim method removes whitespace from both sides of a string

//charAt(position) returns a character at a specified index
// let text = 'hello mitchell'
// let char = text.charAt(0)
// console.log(char)

//charCodeAt() returns the unicode of the character at a specified index in a string

// let text = 'hello'
// let char = text.charCodeAt(0)
// console.log(char)

//property access
// console.log('hello'[0])

//endsWith  checks whether a string ends with a specified string/character

//fromCharCode converts unicode values to character


//includes checks whether a string contains the specified string/characters

//indexOf returns the position of the first found occurence of a specified value in a string

//match searches the string for a match against a regular expression

//repeat returns a new string with specified of copies of the old string

//search search a string for a specified value or regular expression

//valueOf returns the primitive value of a string object

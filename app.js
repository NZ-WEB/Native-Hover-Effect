const board = document.querySelector('#board')
const SQUARES_NUMBER = 1000
const colors = ['#07575b', '#66a5ad', '#c4dfe6']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2 ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#003b46'
    element.style.boxShadow = `0 0 2 #003b46`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}
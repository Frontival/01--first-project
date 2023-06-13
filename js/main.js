const btnUp = document.querySelector('.sizeUp')
const btnDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const p = document.querySelector('p')

let size = 36

const sizeUp = () => {
    if (size >= 40) return
    
    size++
	p.style.fontSize = `${size}px`
}

const sizeDown = () => {
    if (size <= 16) return

    size--
	p.style.fontSize = `${size}px`
}

const changeColor = () => {

    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255

	p.style.color = `rgb(${r}, ${g}, ${b})`
}

btnUp.addEventListener('click', sizeUp)
btnDown.addEventListener('click', sizeDown)
btnColor.addEventListener('click', changeColor)
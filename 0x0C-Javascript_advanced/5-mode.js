function changeMode (size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + 'px'
    document.body.style.fontWeight = weight
    document.body.style.textTransform = transform
    document.body.style.background = background
    document.body.style.color = color
  }
}

function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green')
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white')
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black')
  const paragraph = document.createElement('P')
  paragraph.innerText = 'Welcome Holberton!'
  document.body.appendChild(paragraph)
  const spookyBtn = document.createElement('BUTTON')
  const spookyText = document.createTextNode('spooky')
  spookyBtn.appendChild(spookyText)
  document.body.appendChild(spookyBtn)
  spookyBtn.onclick = () => {
    spooky()
  }

  const darkModeBtn = document.createElement('BUTTON')
  const darkModeText = document.createTextNode('darkMode')
  darkModeBtn.appendChild(darkModeText)
  document.body.appendChild(darkModeBtn)
  darkModeBtn.onclick = () => {
    darkMode()
  }

  const screamModeBtn = document.createElement('BUTTON')
  const screamModeText = document.createTextNode('screamMode')
  screamModeBtn.appendChild(screamModeText)
  document.body.appendChild(screamModeBtn)
  screamModeBtn.onclick = () => {
    screamMode()
  }
}

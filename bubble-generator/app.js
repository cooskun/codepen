function createBubble() {
  const bubble = document.createElement('div')

  bubble.style.background = `#${Math.random()
    .toString(16)
    .substr(-6)}`

  const size = `${Math.random() * 500}px`
  bubble.style.width = size
  bubble.style.height = size

  const pos = `${Math.random() * 100}%`
  bubble.style.left = pos

  const duration = `${Math.random() * 10 + 10}s`
  bubble.style.animationDuration = duration

  const opacity = Math.random()
  bubble.style.opacity = opacity

  bubble.classList.add('bubble')

  document.querySelector('.scene').appendChild(bubble)
}

setInterval(createBubble, 500)

// stabilize vh class items
function stabilizeVH (element) {
  let HEIGHT_CHANGE_TOLERANCE = 100 // Approximate height of URL bar in Chrome on tablet
  let viewportHeight = window.innerHeight
  let elementHeight = element.offsetHeight
  let originalElementPercent = element.offsetHeight / viewportHeight

  window.addEventListener('resize', function () {
    if (Math.abs(viewportHeight - window.innerHeight) > HEIGHT_CHANGE_TOLERANCE) {
      viewportHeight = window.innerHeight
      elementHeight = window.innerHeight * originalElementPercent
      update()
    }
  })

  function update () {
    element.style.height = elementHeight + 'px'
  }

  update()
}

export default function () {
  let elements = document.querySelectorAll('.stabilizeVH')
  for (let i = 0; i < elements.length; i++) {
    stabilizeVH(elements[i])
  }
}

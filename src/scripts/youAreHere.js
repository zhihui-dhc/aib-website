/* global IntersectionObserver CustomEvent */
import $ from 'jquery'
import 'intersection-observer'

function onChange (entries) {
  let elements = []
  entries.forEach(function (entry) {
    elements.push(entry.target)
  })
  console.log('elements', elements)

  lowest = elements[0]
  
  $(elements).each(function (index) {
    if ($(this).offset().top > $(lowest).offset().top) {
      lowest = this
    }
  })
  console.log('lowest heading', lowest)

  let headingId = $(lowest).attr('id')

  // dispatch an event telling us what heading is scrolling into view
  let event = new CustomEvent('ScrolledFurther', { 'detail': headingId })
  window.dispatchEvent(event)
}

export default function () {
  let io = new IntersectionObserver(onChange, { threshold: [ 1 ] })
  io.POLL_INTERVAL = 100

  // observe headings
  $('h4').each(function (index) {
    io.observe(this)
  })

  // listen for the event of what heading is scrolling into view
  window.addEventListener('ScrolledFurther', function (event) {
    let id = '#' + event.detail

    /*
    $(`.toc-wrapper a[href='${id}']`).addClass('active')
    $(`.toc-wrapper a[href!='${id}']`).removeClass('active')
     */
    $(`.toc-wrapper a[href='${id}']`).css('background', '#f00')
    $(`.toc-wrapper a[href!='${id}']`).css('background', '#fff')
  }, false)
}

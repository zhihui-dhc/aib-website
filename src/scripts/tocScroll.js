import $ from 'jquery'
import Ps from 'perfect-scrollbar'

export default function () {
  $('.toc-wrapper a').click(function (e) {
    e.preventDefault()
    console.log($(e.target).attr('href'))
    let scrollSpeed = 666
    let height
    let targetElement = $(e.target).attr('href')

    if (targetElement === '#page-top') {
      height = 0
    } else {
      height = $(targetElement).offset().top - 48 - 16
    }

    $('html, body').animate({ scrollTop: height }, scrollSpeed)
  })

  let toc = document.querySelector('.toc-wrapper')
  Ps.initialize(toc)
}

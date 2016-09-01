import $ from 'jquery'

export default function (showToc) {
  $('.toc-wrapper a').click(function (e) {
    e.preventDefault()
    let scrollSpeed = 666
    let targetElement = $(e.target).attr('href')
    let height

    if (targetElement === '#page-top') {
      height = 0
    } else {
      height = $(targetElement).offset().top - 48 - 16
    }

    // if it's a small screen, hide the toc on click
    let vw = $(window).width()
    if (vw < 960) {
      showToc(false)
    }

    // scroll to the element
    $('html, body').animate({ scrollTop: height }, scrollSpeed)
  })
}

import $ from 'jquery'

function scrollIt (scrollSpeedMult = 1.0) {
  let htmlScrollHeight = $(document).height()
  let htmlViewportHeight = $(window).height()
  let amountOfHtmlToScroll = htmlScrollHeight - htmlViewportHeight

  let sidebarScrollHeight = $('.toc-wrapper').prop('scrollHeight')
  let sidebarHeight = $('.toc-wrapper').height()
  let amountOfSidebarToScroll = sidebarScrollHeight - sidebarHeight

  console.log('htmlScrollH', htmlScrollHeight, 'htmlViewport', htmlViewportHeight)
  console.log('sidebarScrollH', sidebarHeight, 'sidebarH', sidebarHeight)

  $(window).scroll(function () {
    let htmlScrollTop = $(this).scrollTop()

    let ratioScrolled = htmlScrollTop / amountOfHtmlToScroll / scrollSpeedMult

    let sidebarScrollTop = ratioScrolled * amountOfSidebarToScroll
    $('.toc-wrapper').animate({ scrollTop: sidebarScrollTop }, 0)
  })
}
export default function () {
  let vw = $(window).width()

  if (vw >= 960) {
    scrollIt(0.825)
  }

  // disable percentage scrolling on smaller displays
  window.addEventListener('resize', function () {
    console.log('disabling scrolling')
    let vw = $(window).width()
    if (vw < 960) {
      $(window).unbind('scroll')
    }
  }, false)
}

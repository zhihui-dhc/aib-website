function scrollIt (scrollSpeedMult = 1.0) {
  let toc = document.querySelector('.toc-wrapper')

  let htmlScrollHeight = document.body.scrollHeight
  let htmlViewportHeight = document.documentElement.clientHeight
  let amountOfHtmlToScroll = htmlScrollHeight - htmlViewportHeight

  let sidebarScrollHeight = document.querySelector('.toc-wrapper').scrollHeight
  let sidebarHeight = document.querySelector('.toc-wrapper').offsetHeight
  let amountOfSidebarToScroll = sidebarScrollHeight - sidebarHeight

  // console.log('htmlScrollH', htmlScrollHeight, 'htmlViewport', htmlViewportHeight)
  // console.log('sidebarScrollH', sidebarHeight, 'sidebarH', sidebarHeight)

  window.addEventListener('scroll', function () {
    let htmlScrollTop = this.scrollY
    let ratioScrolled = htmlScrollTop / amountOfHtmlToScroll / scrollSpeedMult
    let sidebarScrollTop = ratioScrolled * amountOfSidebarToScroll

    toc.scrollTop = sidebarScrollTop
  })
}
export default function () {
  if (document.documentElement.clientWidth >= 960) {
    scrollIt(0.825)
  }

  // disable percentage scrolling on smaller displays
  window.addEventListener('resize', function () {
    console.log('disabling scrolling')
    if (document.documentElement.clientWidth < 960) {
      window.removeEventListener('scroll')
    }
  }, false)
}

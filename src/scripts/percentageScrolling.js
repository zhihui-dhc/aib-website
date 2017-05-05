function scrollListener (amountOfHtmlToScroll, scrollSpeedMult, amountOfSidebarToScroll, toc) {
  let htmlScrollTop = window.scrollY
  let ratioScrolled = htmlScrollTop / amountOfHtmlToScroll / scrollSpeedMult
  let sidebarScrollTop = ratioScrolled * amountOfSidebarToScroll

  toc.scrollTop = sidebarScrollTop
}

function scrollIt (scrollSpeedMult = 1.0) {
  let toc = document.querySelector('.minimal-toc')

  let htmlScrollHeight = document.body.scrollHeight
  let htmlViewportHeight = window.innerHeight
  let amountOfHtmlToScroll = htmlScrollHeight - htmlViewportHeight

  let sidebarScrollHeight = document.querySelector('.minimal-toc').scrollHeight
  let sidebarHeight = document.querySelector('.minimal-toc').offsetHeight
  let amountOfSidebarToScroll = sidebarScrollHeight - sidebarHeight

  // console.log('htmlScrollH', htmlScrollHeight, 'htmlViewport', htmlViewportHeight)
  // console.log('sidebarScrollH', sidebarScrollHeight, 'sidebarH', sidebarHeight)

  window.addEventListener('scroll',
    scrollListener(amountOfHtmlToScroll, scrollSpeedMult, amountOfSidebarToScroll, toc))
}

export default function () {
  if (document.documentElement.clientWidth >= 1024) {
    scrollIt(1.0)
  }

  // disable percentage scrolling on smaller displays
  window.addEventListener('resize', function () {
    console.log('disabling scrolling')
    if (document.documentElement.clientWidth < 1024) {
      window.removeEventListener('scroll', scrollListener)
    }
  }, false)
}

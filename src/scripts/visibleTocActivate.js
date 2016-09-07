import $ from 'jquery'

export default function (visibleElements) {
  let anchors = document.querySelectorAll('.toc-wrapper a')

  for (let i = 0; i < anchors.length; i++) {
    let el = anchors[i]
    let id = $(el).attr('href')
    id = id.replace('#', '')

    if (visibleElements.find(el => el.id === id)) {
      $(el).addClass('active')
      $(el).parent().addClass('active')
    } else {
      $(el).removeClass('active')
      $(el).parent().removeClass('active')
    }
  }
}

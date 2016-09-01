import $ from 'jquery'
import copyToClipboard from './copyToClipboard.js'

export default function () {
  $('h2[id], h3[id], h4[id]').append(function () {
    let href = '#' + $(this).attr('id')
    return `<i class="material-icons article-link" href="${href}">link</i>`
  })

  $('i.article-link').click(function () {
    let link = this
    let url = window.location.href + $(this).attr('href')
    copyToClipboard(url)

    // show the Copied! message for 1 second
    $(link).addClass('active')

    setTimeout(function () {
      $(link).removeClass('active')
      // console.log('a second passed!')
    }, 1000)
  })
}

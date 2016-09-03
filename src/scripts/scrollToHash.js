/* eslint-env browser */
import $ from 'jquery'

export default function () {
  let hash = window.location.hash
  let scrollSpeed = 666

  if (hash) {
    // remove the hash
    history.replaceState('', document.title, window.location.pathname)

    // scroll to the hash with an animation
    // it has to be in document ready otherwise loading images will break it
    $(document).ready(function () {
      let height = $(hash).offset().top - 48 - 16
      $('html, body').animate({scrollTop: height}, scrollSpeed)
    })
  }
}

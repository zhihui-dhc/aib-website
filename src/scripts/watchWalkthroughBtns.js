import $ from 'jquery'
import inViewport from 'in-viewport'

export default function () {
  $(window).scroll(function () {
    let btns = document.querySelectorAll('.btn-walkthrough-key')
    for (let i = 0; i < btns.length; i++) {
      let btn = btns[i]
      if (inViewport(btn)) {
        btn.classList.add('active')
      } else {
        btn.classList.remove('active')
      }
    }
  })
}

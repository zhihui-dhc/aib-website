import Ps from 'perfect-scrollbar'

export default function () {
  let toc = document.querySelector('.toc-wrapper')
  Ps.initialize(toc)
}

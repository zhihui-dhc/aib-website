import jQuery from 'jquery'

(function () {
  jQuery.fn['bounds'] = function () {
    let bounds = {
      left: Number.POSITIVE_INFINITY,
      top: Number.POSITIVE_INFINITY,
      right: Number.NEGATIVE_INFINITY,
      bottom: Number.NEGATIVE_INFINITY,
      width: Number.NaN,
      height: Number.NaN
    }

    this.each(function (i, el) {
      let elQ = jQuery(el)
      let off = elQ.offset()
      off.right = off.left + jQuery(elQ).width()
      off.bottom = off.top + jQuery(elQ).height()

      if (off.left < bounds.left) {
        bounds.left = off.left
      }

      if (off.top < bounds.top) {
        bounds.top = off.top
      }

      if (off.right > bounds.right) {
        bounds.right = off.right
      }

      if (off.bottom > bounds.bottom) {
        bounds.bottom = off.bottom
      }
    })

    bounds.width = bounds.right - bounds.left
    bounds.height = bounds.bottom - bounds.top
    return bounds
  }
})()

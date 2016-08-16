<template>
  <page-index></page-index>
</template>

<script>
import PageIndex from './components/PageIndex'

export default {
  components: {
    PageIndex
  }
}
</script>

<style lang="stylus">
@import './styles/variables.styl'

global-reset()
reset-html5()

*
  box-sizing border-box

body
  df()

a
  color link
  text-decoration none
  &:hover
    color hover
</style>

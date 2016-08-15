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

body
  df()
</style>

<template>
  <div class="page-index">
    <section-cover></section-cover>
  </div>
</template>

<script>
import SectionCover from './SectionCover'

export default {
  name: 'page-index',
  components: {
    SectionCover
  },
  head: {
    title () {
      return {
        inner: 'All In Bits',
        separator: '-',
        complement: 'Internet of Blockchains'
      }
    }
  }
}
</script>
<style scoped lang="stylus">
  @require '../../styles/variables.styl'
  .page-index
    background: url(../../assets/img/background.png)

</style>

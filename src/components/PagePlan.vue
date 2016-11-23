<template>
  <div>
    <div class="header-padding"></div>
    <div class="article-wrapper">
      <page-plan-body></page-plan-body>
    </div>
  </div>
</template>

<script>
import PagePlanBody from './PagePlanBody'

export default {
  components: {
    PagePlanBody
  },
  head: {
    title () {
      return {
        inner: this.$t('siteHeader.plan'),
        separator: '-',
        complement: 'Cosmos - ' + this.$t('site.networkOfBlockchains')
      }
    }
  }
}
</script>

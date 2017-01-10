<template>
  <div class="page page-plan">
    <text-container>
      <text-content></text-content>
    </text-container>
  </div>
</template>

<script>
import PageHeader from './PageHeader'
import TextContainer from './TextContainer'
import TextContent from '../locales/content/en-US/PLAN.md'
export default {
  name: 'page-plan',
  components: {
    PageHeader,
    TextContainer,
    TextContent
  },
  head: {
    title () {
      return {
        inner: this.$t('siteHeader.plan'),
        separator: '-',
        complement: this.$t('site.title')
      }
    }
  }
}
</script>

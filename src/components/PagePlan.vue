<template>
  <div class="page page-plan">
    <locale-menu path="plan" :langs="['en-US', 'ko']"></locale-menu>
    <text-container>
      <text-content></text-content>
        <text-ko v-if="$route.params.locale === 'ko'"></text-ko>
        <text-en-us v-else></text-en-us>
    </text-container>
  </div>
</template>

<script>
import PageHeader from './PageHeader'
import LocaleMenu from './LocaleMenu'
import TextContainer from './TextContainer'
import TextEnUs from '../../content/en-US/PLAN.md'
import TextKo from '../../content/ko/PLAN.md'
export default {
  name: 'page-plan',
  components: {
    PageHeader,
    LocaleMenu,
    TextContainer,
    TextEnUs,
    TextKo
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

<template>
  <div class="page page-plan page-no-user">
    <locale-menu path="plan" :langs="['en-US', 'ko']"></locale-menu>
    <vue-article-body>
      <text-ko v-if="$route.params.locale === 'ko'"></text-ko>
      <text-en-us v-else></text-en-us>
    </vue-article-body>
  </div>
</template>

<script>
import LocaleMenu from './LocaleMenu'
import VueArticleBody from '@nylira/vue-article-body'
import TextEnUs from '../../content/en-US/PLAN.md'
import TextKo from '../../content/ko/PLAN.md'
export default {
  name: 'page-plan',
  components: {
    LocaleMenu,
    VueArticleBody,
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

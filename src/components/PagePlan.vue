<template>
  <div class="page-plan">
    <locale-menu path="plan" :langs="['en-US', 'ko']"></locale-menu>
    <article-body>
      <text-ko v-if="$route.params.locale === 'ko'"></text-ko>
      <text-en-us v-else></text-en-us>
    </article-body>
  </div>
</template>

<script>
import LocaleMenu from './LocaleMenu'
import ArticleBody from '@nylira/vue-article-body'
import TextEnUs from '../../content/en-US/PLAN.md'
import TextKo from '../../content/ko/PLAN.md'
export default {
  name: 'page-plan',
  components: {
    LocaleMenu,
    ArticleBody,
    TextEnUs,
    TextKo
  },
  data () {
    return {
      metadata: {
        page: 'Plan',
        title: `Plan - ${this.$t('site.title')}`,
        desc: 'Information about the Cosmos fundraising plan. The details in this plan override what is currently in the whitepaper, and all other plans published prior.'
      }
    }
  },
  head: {
    title () {
      return {
        inner: this.metadata.page,
        separator: '-',
        complement: this.$t('site.title')
      }
    },
    meta () {
      return [
        { n: 'description', c: this.metadata.desc },
        { n: 'twitter:title', c: this.metadata.title },
        { n: 'twitter:description', c: this.metadata.desc },
        { p: 'og:title', c: this.metadata.title },
        { p: 'og:description', c: this.metadata.desc }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
.page-plan
  padding-top 1rem
</style>

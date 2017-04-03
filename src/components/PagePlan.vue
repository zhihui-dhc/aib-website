<template>
  <div class="page-plan">
    <article-body>
      <text-en-us></text-en-us>
    </article-body>
  </div>
</template>

<script>
import ArticleBody from '@nylira/vue-article-body'
import TextEnUs from '../../content/en-US/PLAN.md'
export default {
  name: 'page-plan',
  components: {
    ArticleBody,
    TextEnUs
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

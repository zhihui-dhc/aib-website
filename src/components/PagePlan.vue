<template>
  <div class="page-plan page-default">
    <div class="article-body">
      <ja v-if="lang === 'ja'"></ja>
      <ko v-else-if="lang === 'ja'"></ko>
      <zh v-else-if="lang === 'ja'"></zh>
      <en v-else></en>
    </div>
  </div>
</template>

<script>
import PageHeader from './PageHeader'
import en from '../content/en/PLAN.md'
import ja from '../content/ja/PLAN.md'
import ko from '../content/ko/PLAN.md'
import zh from '../content/zh/PLAN.md'
import Vue from 'vue'

export default {
  components: {
    PageHeader,
    en,
    ja,
    ko,
    zh
  },
  computed: {
    lang () {
      return Vue.config.lang
    }
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

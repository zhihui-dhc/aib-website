<template>
  <div class="page page-plan">
    <div class="article-body">
      <en></en>
    </div>
  </div>
</template>

<script>
import PageHeader from './PageHeader'
import en from '../content/en/PLAN.md'
import Vue from 'vue'

export default {
  components: {
    PageHeader,
    en
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

<template>
  <div class="page">
    <page-whitepaper-nav></page-whitepaper-nav>
    <div class="toc-padding" v-bind:class="{ 'toc-visible': whitepaperTocVisible }">
    <div class="article-body">
      <zh v-if="lang === 'zh'"></zh>
      <en v-else></en>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageWhitepaperNav from './PageWhitepaperNav'
import en from '../content/en/WHITEPAPER.md'
import zh from '../content/zh/WHITEPAPER.md'
import Vue from 'vue'

export default {
  components: {
    PageWhitepaperNav,
    en,
    zh
  },
  computed: {
    lang () {
      return Vue.config.lang
    },
    ...mapGetters([
      'whitepaperTocVisible'
    ])
  },
  head: {
    title () {
      return {
        inner: this.$t('siteHeader.whitepaper'),
        separator: '-',
        complement: 'Cosmos - ' + this.$t('site.networkOfBlockchains')
      }
    }
  },
  mounted () {
    if (document.documentElement.clientWidth < 960) {
      this.$store.commit('setWhitepaperTocVisible', false)
    }
  }
}
</script>

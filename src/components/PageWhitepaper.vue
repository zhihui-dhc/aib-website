<template>
  <div class="page page-no-user">
    <page-whitepaper-locale></page-whitepaper-locale>
    <page-whitepaper-nav></page-whitepaper-nav>
    <div class="toc-padding" v-bind:class="{ 'toc-visible': whitepaperTocVisible }">
      <text-container>
        <text-en-us v-if="$route.params.locale === 'en-US'"></text-en-us>
        <text-zh-cn v-if="$route.params.locale === 'zh-CN'"></text-zh-cn>
      </text-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageWhitepaperNav from './PageWhitepaperNav'
import PageWhitepaperLocale from './PageWhitepaperLocale'
import TextContainer from './TextContainer'
import TextEnUs from '../locales/content/en-US/WHITEPAPER.md'
import TextZhCn from '../locales/content/zh-CN/WHITEPAPER.md'
export default {
  components: {
    PageWhitepaperNav,
    PageWhitepaperLocale,
    TextContainer,
    TextEnUs,
    TextZhCn
  },
  computed: {
    ...mapGetters([
      'whitepaperTocVisible'
    ])
  },
  head: {
    title () {
      return {
        inner: this.$t('siteHeader.whitepaper'),
        separator: '-',
        complement: 'Cosmos - ' + this.$t('site.internetOfBlockchains')
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

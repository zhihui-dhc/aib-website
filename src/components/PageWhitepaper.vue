<template>
  <div class="page page-no-user">
    <page-whitepaper-locale></page-whitepaper-locale>
    <page-whitepaper-nav></page-whitepaper-nav>
    <toc-padding v-bind:class="{ 'toc-visible': whitepaperTocVisible }">
      <text-container>
        <text-ko v-if="$route.params.locale === 'ko'"></text-ko>
        <text-zh-cn v-else-if="$route.params.locale === 'zh-CN'"></text-zh-cn>
        <text-en-us v-else></text-en-us>
      </text-container>
    </toc-padding>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageWhitepaperNav from './PageWhitepaperNav'
import PageWhitepaperLocale from './PageWhitepaperLocale'
import TocPadding from './TocPadding'
import TextContainer from './TextContainer'
import TextEnUs from '../content/en-US/WHITEPAPER.md'
import TextKo from '../content/ko/WHITEPAPER.md'
import TextZhCn from '../content/zh-CN/WHITEPAPER.md'
export default {
  components: {
    PageWhitepaperNav,
    PageWhitepaperLocale,
    TocPadding,
    TextContainer,
    TextEnUs,
    TextKo,
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
        complement: this.$t('site.title')
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

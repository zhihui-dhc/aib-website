<template>
  <div class="page-whitepaper">
    <page-whitepaper-nav></page-whitepaper-nav>
    <div class="toc-padding" v-bind:class="{ 'toc-visible': whitepaperTocVisible }">
    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <div class="article-body">
            <page-whitepaper-body></page-whitepaper-body>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageWhitepaperNav from './PageWhitepaperNav'
import PageWhitepaperBody from './PageWhitepaperBody'

export default {
  components: {
    PageWhitepaperNav,
    PageWhitepaperBody
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

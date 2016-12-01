<template>
  <div class="page-blog-entry">
    <div class="page-header page-header-wide">
      <h1>{{ entry.title }}</h1>
      <p>{{ entry.dateFriendly }} <template v-if="entry.author">by {{ entry.author }}</template></p>
    </div>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <div class="article-body" v-html="entry.body"></div>
          <article-footer :facebook-url="facebookUrl" :twitter-url="twitterUrl"></article-footer>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArticleFooter from './ArticleFooter'
import PageHeader from './PageHeader'
import Vue from 'vue'

import { mapGetters } from 'vuex'

export default {
  name: 'page-blog-entry',
  components: {
    ArticleFooter,
    PageHeader
  },
  computed: {
    entry () {
      let slug = this.$route.params.entry
      return this.allPosts[Vue.config.lang].find(p => p.slug === slug)
    },
    entrySubtitle () {
      let string = this.entry.dateFriendly
      if (this.entry.author) {
        string += ' by ' + this.entry.author
      }
      return string
    },
    facebookUrl () {
      let url = 'https://www.facebook.com/sharer/sharer.php?u='
      if (this.entry) url += `${this.entry.title} ${window.location.href}`
      else url += ` ${window.location.href}`
      return url
    },
    twitterUrl () {
      let url = 'https://twitter.com/home?status='
      if (this.entry) url += `${this.entry.title} ${window.location.href}`
      else url += ` ${window.location.href}`
      return url
    },
    ...mapGetters([
      'allPosts'
    ])
  },
  mounted () {
    document.title = this.entry.title + ' - Tendermint'
    console.log('entry', this.entry)
  }
}
</script>

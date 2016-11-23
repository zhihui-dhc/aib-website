<template>
  <div class="component">
    <div class="page-header page-header-wide">
      <h1>{{ entry.title }} </h1>
      <p>{{ entry.dateFriendly }} <template v-if="entry.author">by {{ entry.author }}</template></p>
    </div>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <div class="article-body" v-html="entry.body"></div>
          <article-footer :facebook-url="facebookUrl" :twitter-url="twitterUrl"></article-footer>
        </div><!--section-content-->
      </div><!--section-container-->
    </section>
  </div>
</template>

<script>
import ArticleBtnBack from './ArticleBtnBack'
import ArticleFooter from './ArticleFooter'

import { mapGetters } from 'vuex'

export default {
  name: 'page-blog-entry',
  components: {
    ArticleBtnBack,
    ArticleFooter
  },
  computed: {
    entry () {
      let slug = this.$route.params.entry
      if (this.allPosts) {
        return this.allPosts.find(p => p.slug === slug)
      }
      return {}
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

<template>
  <div class="page page-blog-entry">
    <page-header
      :title="entry.title"
      :subtitle="entrySubtitle">
    </page-header>
    <section class="section-default">
      <div class="section-container">
        <div class="article-body" v-html="entry.body"></div>
        <!--<article-footer :facebook-url="facebookUrl" :twitter-url="twitterUrl"></article-footer>-->
      </div>
    </section>
    <comments></comments>
  </div>
</template>

<script>
import ArticleFooter from './ArticleFooter'
import PageHeader from './PageHeader'
import Comments from './Comments'
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default {
  name: 'page-blog-entry',
  components: {
    ArticleFooter,
    PageHeader,
    Comments
  },
  computed: {
    entrySubtitle () {
      let value = this.entry.dateFriendly
      if (this.entry.author) {
        value += `by ${this.entry.author} | <a href="#comments">Comments</a>`
      }
      return value
    },
    entry () {
      let slug = this.$route.params.entry
      return this.allPosts[Vue.config.lang].find(p => p.slug === slug)
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
  }
}
</script>

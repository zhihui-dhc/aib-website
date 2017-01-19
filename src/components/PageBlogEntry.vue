<template>
  <div class="page page-blog-entry">
    <vue-page-header
      :title="entry.title"
      :subtitle="entrySubtitle">
    </vue-page-header>
    <section class="section-default">
      <div class="section-container">
        <vue-article-body>
          <div v-html="entry.body"></div>
        </vue-article-body>
      </div>
    </section>
    <comments></comments>
  </div>
</template>

<script>
import ArticleFooter from './ArticleFooter'
import VueArticleBody from '@nylira/vue-article-body'
import VuePageHeader from '@nylira/vue-page-header'
import Comments from './Comments'
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default {
  name: 'page-blog-entry',
  components: {
    ArticleFooter,
    VueArticleBody,
    VuePageHeader,
    Comments
  },
  computed: {
    entrySubtitle () {
      let value = this.entry.dateFriendly
      if (this.entry.author) {
        value += ` by ${this.entry.author} - <a href="#comments">Comments</a>`
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
  head: {
    title () {
      return {
        inner: this.entry.title,
        separator: '-',
        complement: this.$t('site.title')
      }
    }
  }
}
</script>

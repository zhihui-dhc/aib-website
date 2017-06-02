<template>
  <div class="page-blog-entry">
    <page-header
      :title="entry.title"
      :subtitle="entrySubtitle">
    </page-header>
    <article-body>
      <div v-html="entry.body"></div>
    </article-body>
    <article-footer
      :email="email"
      :facebook="facebook"
      :reddit="reddit"
      :twitter="twitter">
    </article-footer>
    <overlay-btns>
      <overlay-btn icon="chevron-left" @click.native="gotoBlog"></overlay-btn>
    </overlay-btns>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleFooter from './ArticleFooter'
import ArticleBody from '@nylira/vue-article-body'
import OverlayBtns from './OverlayBtns'
import OverlayBtn from './OverlayBtn'
import PageHeader from '@nylira/vue-page-header'
export default {
  name: 'page-blog-entry',
  components: {
    ArticleFooter,
    ArticleBody,
    OverlayBtns,
    OverlayBtn,
    PageHeader
  },
  computed: {
    entrySubtitle () {
      let value = this.entry.dateFriendly
      if (this.entry.author) {
        value += ` by ${this.entry.author}`
      }
      return value
    },
    entry () {
      let slug = this.$route.params.entry
      return this.allPosts.find(p => p.slug === slug)
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
    ...mapGetters(['allPosts'])
  },
  head: {
    title () {
      return {
        inner: this.entry.title,
        separator: '-',
        complement: 'Cosmos - Internet of Blockchains'
      }
    },
    meta () {
      return [
        { n: 'description', c: this.entry.excerpt },
        { n: 'twitter:title', c: this.entry.title },
        { n: 'twitter:description', c: this.entry.excerpt },
        { p: 'og:title', c: this.entry.title },
        { p: 'og:description', c: this.entry.excerpt }
      ]
    }
  },
  methods: {
    gotoBlog () {
      this.$router.push('/blog')
    }
  }
}
</script>

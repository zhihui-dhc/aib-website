<template>
  <div class="page-split page-blog-index">
    <vue-page-header
      :title="$t('siteBlog.title')"
      :subtitle="$t('siteBlog.subtitle')"
      type="split">
    </vue-page-header>
    <div class="page-content">
      <card-post :title="post.title" :desc="post.description" :url="'/blog/' + post.slug" :meta="post.dateFriendly + ' · ' + post.author" v-for="post in posts">
      </card-post>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPost from './CardPost'
import VuePageHeader from '@nylira/vue-page-header'
import Vue from 'vue'

export default {
  name: 'page-blog-index',
  components: {
    VuePageHeader,
    CardPost
  },
  computed: {
    posts () {
      return this.allPosts[Vue.config.lang]
    },
    ...mapGetters([
      'allPosts'
    ])
  },
  data () {
    return {
      metadata: {
        page: 'Blog',
        title: `Blog - ${this.$t('site.title')}`,
        desc: 'Articles written about Cosmos: The Internet of Blockchains.'
      }
    }
  },
  head: {
    title () {
      return {
        inner: this.metadata.page,
        separator: '-',
        complement: this.$t('site.title')
      }
    },
    meta () {
      return [
        { n: 'description', c: this.metadata.desc },
        { n: 'twitter:title', c: this.metadata.title },
        { n: 'twitter:description', c: this.metadata.desc },
        { p: 'og:title', c: this.metadata.title },
        { p: 'og:description', c: this.metadata.desc }
      ]
    }
  }
}
</script>

<template>
  <div class="split-page page-blog-index">
    <page-header
      :title="$t('siteBlog.title')"
      :subtitle="$t('siteBlog.subtitle')"
      type="left">
    </page-header>
    <div class="page-content">
      <card-post :title="post.title" :desc="post.description" :url="'/blog/' + post.slug" :meta="post.dateFriendly + ' · ' + post.author" v-for="post in posts">
      </card-post>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPost from './CardPost'
import PageHeader from './PageHeader'
import Vue from 'vue'

export default {
  name: 'page-blog-index',
  components: {
    PageHeader,
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
  head: {
    title () {
      return {
        inner: this.$t('siteHeader.blog'),
        separator: '-',
        complement: 'Cosmos - ' + this.$t('site.internetOfBlockchains')
      }
    }
  }
}
</script>

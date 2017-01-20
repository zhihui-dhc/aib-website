<template>
  <div class="page-user-menu page-split page-blog-index">
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
  head: {
    title () {
      return {
        inner: this.$t('siteHeader.blog'),
        separator: '-',
        complement: this.$t('site.title')
      }
    }
  }
}
</script>

<template>
  <div class="page page-blog-entry">
    <vue-page-header :title="entry.title" :subtitle="subtitle"></vue-page-header>
    <comment-thread></comment-thread>
  </div>
</template>

<script>
import VuePageHeader from '@nylira/vue-page-header'
import CommentThread from './CommentThread'
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default {
  name: 'page-blog-entry',
  components: {
    VuePageHeader,
    CommentThread
  },
  computed: {
    entry () {
      let slug = this.$route.params.entry
      return this.allPosts[Vue.config.lang].find(p => p.slug === slug)
    },
    subtitle () {
      let string = this.entry.dateFriendly
      if (this.entry.author) {
        string += ` by ${this.entry.author}`
      }
      return string
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

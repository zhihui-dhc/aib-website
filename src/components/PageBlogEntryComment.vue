<template>
  <div class="page-blog-entry-comment">
    <page-header :title="entry.title" :subtitle="subtitle"></page-header>
    <comment-thread></comment-thread>
  </div>
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import CommentThread from './CommentThread'
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default {
  name: 'page-blog-entry-comment',
  components: {
    PageHeader,
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

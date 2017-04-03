<template>
  <page-split class="page-blog-index">
    <page-header
      :title="$t('siteBlog.title')"
      :subtitle="$t('siteBlog.subtitle')"
      slot="header"
      type="split">
    </page-header>
    <ni-section>
      <card-post :title="post.title" :desc="post.description" :url="'/blog/' + post.slug" :meta="post.dateFriendly + ' · ' + post.author" v-for="post in posts">
      </card-post>
    </ni-section>
  </page-split>
</template>

<script>
import { mapGetters } from 'vuex'
import NiSection from './NiSection'
import CardPost from './CardPost'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
import Vue from 'vue'
export default {
  name: 'page-blog-index',
  components: {
    CardPost,
    NiSection,
    PageSplit,
    PageHeader
  },
  computed: {
    posts () {
      return this.allPosts[Vue.config.lang]
    },
    ...mapGetters(['allPosts'])
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

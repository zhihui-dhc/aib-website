<template>
  <page-split class="page-blog-index">
    <page-header
      title="Blog"
      subtitle="<a href='/static/en.xml'>Subscribe</a> for the latest updates."
      slot="header"
      type="split">
    </page-header>
    <ni-section>
      <card-post
        v-for="post in posts"
        :key="post.slug"
        :title="post.title"
        :desc="post.description"
        :url="'/blog/' + post.slug"
        :meta="post.dateFriendly + ' · ' + post.author">
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
      return this.allPosts
    },
    ...mapGetters(['allPosts'])
  },
  data: () => ({
    metadata: {
      title: 'Blog',
      desc: 'Articles written about Cosmos - Internet of Blockchains.'
    }
  }),
  head: {
    title () {
      return {
        inner: this.metadata.title,
        separator: '-',
        complement: 'Cosmos - Internet of Blockchains'
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

<template>
  <div class="article-wrapper">
    <div class="article-date">{{ post.dateCreated | dateShort }}</div>
    <h1>{{ post.title }}</h1>
    {{{ marked(post.body) }}}
  </div>
</template>

<script>
import marked from 'marked'

export default {
  computed: {
    post () {
      if (this.posts.length > 0) {
        return this.posts.find(p => p.slug === this.$route.params.post)
      }
      let emptyPost = {
        title: 'Loading...',
        body: 'Loading...'
      }
      return emptyPost
    }
  },
  data () {
    return {
      marked: marked
    }
  },
  vuex: {
    getters: {
      posts: state => state.posts.posts
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

.article-date
  color light
  margin-bottom -2*x
  margin-top 3*x
  </style>


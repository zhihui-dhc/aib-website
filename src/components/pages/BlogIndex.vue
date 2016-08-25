<template>
  <div class="header-padding"></div>
  <div class="article-wrapper">
    <h1>Blog</h1>

    <div v-for="post in posts">
      <a v-link="{ path: '/blog/' + post.slug }">
        <h3>{{ post.title }}</h3>
      </a>
      <p>{{ post.dateCreated | dateShort }}</p>
    </div>
 </div>
</template>

<script>
export default {
  vuex: {
    getters: {
      posts: state => state.posts.posts
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>


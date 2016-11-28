<template>
  <div class="split-page page-blog-index">
    <page-header :title="$t('siteBlog.title')" :subtitle="$t('siteBlog.subtitle')"></page-header>
    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">
          <card-post :title="post.title" :desc="post.description" :url="'/blog/' + post.slug" :meta="post.dateFriendly" v-for="post in posts">
          </card-post>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPost from './CardPost'
import PageHeader from './PageHeader'

export default {
  name: 'page-blog-index',
  components: {
    PageHeader,
    CardPost
  },
  computed: mapGetters({
    posts: 'allPosts'
  }),
  mounted () {
    document.title = 'Blog - Tendermint'
  }
}
</script>

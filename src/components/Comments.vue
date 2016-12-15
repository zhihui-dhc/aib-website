<template>
  <div class="pz-comments-container" id="comments">
    <comment-form-btn></comment-form-btn>
    <div class="pz-comments">
      <comment00 v-for="comment in comments" :comment="comment"></comment00>
    </div>
  </div>
</template>

<script>
import Comment00 from './Comment00'
import CommentFormBtn from './CommentFormBtn'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentFormBtn,
    Comment00
  },
  computed: {
    comments () {
      let postId = this.$route.params.entry
      let comments = this.allComments.filter(
        c => c.parentId === '' && c.postId === postId)
      return comments.sort((a, b) => b.dateCreated - a.dateCreated)
    },
    ...mapGetters([
      'allComments'
    ])
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comments-container
  max-width 40rem
  margin 0 auto
  margin-bottom 0.5rem
</style>

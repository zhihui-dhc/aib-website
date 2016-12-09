<template>
  <div class="pz-comments-container">
    <comment-form-btn></comment-form-btn>
    <comment-form></comment-form>
    <div class="pz-comments">
      <comment00 v-for="comment in comments" :comment="comment"></comment00>
    </div>
  </div>
</template>

<script>
import Comment00 from './Comment00'
import CommentFormBtn from './CommentFormBtn'
import CommentForm from './CommentForm'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentFormBtn,
    CommentForm,
    Comment00
  },
  computed: {
    comments () {
      return this.allComments.filter(c => c.parentId === '')
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
  font-size 0.875rem

.pz-comment
  padding 0.5rem 0 0.5rem 0.5rem
  background #fff
  .pz-comment
    padding-bottom 0.125rem
    border-left 1px solid bc

    &:last-of-type
      margin-bottom 0.5rem

.pz-comments > .pz-comment
  border-top 0.25rem solid c-app-bg
  border-left none
</style>

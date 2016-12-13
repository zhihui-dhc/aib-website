<template>
  <div class="pz-comment" :id="commentId">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment01 v-for="cc in childComments" :comment="cc"></comment01>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment01 from './Comment01'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentContainer,
    Comment01
  },
  computed: {
    commentId () { return `comment-${this.comment.id}` },
    childComments () {
      return this.allComments.filter(c => c.parentId === this.comment.id)
    },
    ...mapGetters(['allComments'])
  },
  props: ['comment']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comment
  padding 0.5rem 0 0.5rem 0.5rem
  background #fff
  .pz-comment
    padding-bottom 0.125rem
    border-left 1px solid bc

    &:last-of-type
      margin-bottom 0.5rem
</style>

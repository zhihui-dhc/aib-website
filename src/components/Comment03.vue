<template>
  <div class="pz-comment" :id="commentId">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment04 v-for="cc in childComments" :comment="cc"></comment04>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment04 from './Comment04'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentContainer,
    Comment04
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

<template>
  <div class="pz-comment" :id="commentId">
    <comment-container :comment="comment"></comment-container>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
export default {
  components: {
    CommentContainer
  },
  computed: {
    commentId () { return `comment-${this.comment.id}` }
  },
  props: ['comment']
}
</script>

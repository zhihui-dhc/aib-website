<template>
  <div class="pz-comment" :id="`comment-${comment.id}`">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment07 v-for="cc in comments" :comment="cc"></comment07>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment07 from './Comment07'
import { mapGetters } from 'vuex'
import orderedComments from '../scripts/orderedComments'
export default {
  components: {
    CommentContainer,
    Comment07
  },
  computed: {
    commentId () { return `comment-${this.comment.id}` },
    comments () { return orderedComments(this.allComments, this.comment.id) },
    ...mapGetters(['allComments'])
  },
  props: ['comment']
}
</script>

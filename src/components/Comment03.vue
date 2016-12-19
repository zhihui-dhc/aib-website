<template>
  <div class="pz-comment" :id="`comment-${comment.id}`">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment04 v-for="cc in comments" :comment="cc"></comment04>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment04 from './Comment04'
import { mapGetters } from 'vuex'
import orderedComments from '../scripts/orderedComments'
export default {
  components: {
    CommentContainer,
    Comment04
  },
  computed: {
    comments () { return orderedComments(this.allComments, this.comment.id) },
    ...mapGetters(['allComments'])
  },
  props: ['comment']
}
</script>

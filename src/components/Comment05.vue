<template>
  <div class="pz-comment" :id="`comment-${comment.id}`">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment06 v-for="cc in comments" :comment="cc"></comment06>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment06 from './Comment06'
import { mapGetters } from 'vuex'
import orderedComments from '../scripts/orderedComments'
export default {
  components: {
    CommentContainer,
    Comment06
  },
  computed: {
    comments () { return orderedComments(this.allComments, this.comment.id) },
    ...mapGetters(['allComments'])
  },
  props: ['comment']
}
</script>

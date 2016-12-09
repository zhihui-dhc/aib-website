<template>
  <div class="pz-comment">
    <comment-body :comment="comment"></comment-body>
    <div class="pz-child-comments">
      <comment07 v-for="cc in childComments" :comment="cc"></comment07>
    </div>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
import Comment07 from './Comment07'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentBody,
    Comment07
  },
  computed: {
    childComments () {
      return this.allComments.filter(c => c.parentId === this.comment.id)
    },
    ...mapGetters(['allComments'])
  },
  props: ['comment']
}
</script>

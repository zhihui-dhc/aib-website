<template>
  <div class="pz-comment">
    <comment-body :comment="comment"></comment-body>
    <div class="pz-child-comments">
      <comment03 v-for="cc in childComments" :comment="cc"></comment03>
    </div>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
import Comment03 from './Comment03'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentBody,
    Comment03
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

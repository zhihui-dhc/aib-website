<template>
  <div class="pz-comment">
    <comment-body :comment="comment"></comment-body>
    <div class="pz-child-comments">
      <comment01 v-for="cc in childComments" :comment="cc"></comment01>
    </div>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
import Comment01 from './Comment01'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentBody,
    Comment01
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

<template>
  <div class="pz-comment">
    <comment-body :comment="comment"></comment-body>
    <div class="pz-child-comments">
      <comment05 v-for="cc in childComments" :comment="cc"></comment05>
    </div>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
import Comment05 from './Comment05'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentBody,
    Comment05
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

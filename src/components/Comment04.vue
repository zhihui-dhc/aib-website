<template>
  <div class="pz-comment" :id="commentId">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment05 v-for="cc in childComments" :comment="cc"></comment05>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment05 from './Comment05'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentContainer,
    Comment05
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

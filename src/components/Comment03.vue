<template>
  <div class="pz-comment">
    <comment-body :comment="comment"></comment-body>
    <div class="pz-child-comments">
      <comment04 v-for="cc in childComments" :comment="cc"></comment04>
    </div>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
import Comment04 from './Comment04'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentBody,
    Comment04
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

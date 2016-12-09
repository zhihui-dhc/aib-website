<template>
  <div class="pz-comment">
    <comment-body :comment="comment"></comment-body>
    <div class="pz-child-comments">
      <comment02 v-for="cc in childComments" :comment="cc"></comment02>
    </div>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
import Comment02 from './Comment02'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentBody,
    Comment02
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

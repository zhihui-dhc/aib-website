<template>
  <div class="pz-comment">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment03 v-for="cc in childComments" :comment="cc"></comment03>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment03 from './Comment03'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentContainer,
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

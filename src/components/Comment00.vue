<template>
  <div class="pz-comment">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment01 v-for="cc in childComments" :comment="cc"></comment01>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment01 from './Comment01'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentContainer,
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

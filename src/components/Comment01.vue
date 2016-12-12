<template>
  <div class="pz-comment">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment02 v-for="cc in childComments" :comment="cc"></comment02>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment02 from './Comment02'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentContainer,
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

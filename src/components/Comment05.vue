<template>
  <div class="pz-comment">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment06 v-for="cc in childComments" :comment="cc"></comment06>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment06 from './Comment06'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentContainer,
    Comment06
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

<template>
  <div class="pz-comment">
    <comment-container :comment="comment"></comment-container>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
export default {
  components: {
    CommentContainer
  },
  props: ['comment']
}
</script>

<template>
  <div class="pz-comment">
    <comment-body :comment="comment"></comment-body>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
export default {
  components: {
    CommentBody
  },
  props: ['comment']
}
</script>

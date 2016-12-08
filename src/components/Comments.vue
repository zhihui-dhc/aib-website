<template>
  <div class="pz-comments-container">
    <div class="pz-comments">
      <comment v-for="comment in allComments" :comment="comment"></comment>
    </div>
  </div>
</template>

<script>
import Comment from './Comment'
import { mapGetters } from 'vuex'
export default {
  components: {
    Comment
  },
  computed: {
    ...mapGetters([
      'allComments'
    ])
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comments-container
  margin-bottom 0.5rem

.pz-comments > .pz-comment
  border-top 1px solid bc
  .pz-comment
    border 1px solid bc
</style>

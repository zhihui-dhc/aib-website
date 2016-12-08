<template>
  <div class="pz-comments-container">
    <div class="pz-comments">
      <comment v-for="comment in comments" :comment="comment"></comment>
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
    comments () {
      return this.allComments.filter(c => c.parentComment === '')
    },
    ...mapGetters([
      'allComments'
    ])
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comments-container
  max-width 40rem
  margin 0 auto
  margin-bottom 0.5rem

.pz-comments > .pz-comment
  border-top 1px solid bc
  .pz-comment
    border 1px solid bc
</style>

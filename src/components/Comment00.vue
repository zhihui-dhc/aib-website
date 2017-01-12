<template>
  <div class="pz-comment" :id="`comment-${comment.id}`">
    <comment-container :comment="comment"></comment-container>
    <div class="pz-child-comments">
      <comment01 v-for="cc in comments" :comment="cc"></comment01>
    </div>
  </div>
</template>

<script>
import CommentContainer from './CommentContainer'
import Comment01 from './Comment01'
import { mapGetters } from 'vuex'
import orderedComments from '../scripts/orderedComments'
export default {
  components: {
    CommentContainer,
    Comment01
  },
  computed: {
    comments () { return orderedComments(this.allComments, this.comment.id) },
    ...mapGetters(['allComments'])
  },
  props: ['comment']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comment
  padding 0.5rem 0 0.5rem 0.5rem
  background #fff

  .pz-comment
    padding-bottom 0.125rem
    border-left 1px solid bc
    &:last-of-type
      margin-bottom 0.5rem

@media screen and (min-width: 360px)
  .pz-comment
    padding-top 0.75rem
    padding-bottom 0.75rem

@media screen and (min-width: 720px)
  .pz-comment
    padding-left 0.75rem
    .pz-comment
      border-left-color lighten(bc, 50%)

@media screen and (min-width: 960px)
  .pz-comment
    padding-left 1rem

@media screen and (min-width: 1200px)
  .pz-comment
    padding-left 2rem
</style>

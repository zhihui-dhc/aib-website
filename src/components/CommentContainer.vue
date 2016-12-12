<template>
  <div class="pz-comment-container">
    <comment-body :comment="comment"></comment-body>
    <menu>
      <a href="#"><i class="fa fa-ellipsis-h"></i></a>
      <div class="divider"></div>
      <a @click="goComment()"><i class="fa fa-reply"></i></a>
      <div class="divider"></div>
      <div class="score">
        <a class="up" @click="upvote"><i class="fa fa-chevron-up"></i></a>
        <span class="value" :title="scoreDetailed">
          {{ score }}
        </span>
        <a class="down" @click="downvote"><i class="fa fa-chevron-down"></i></a>
      </div>
    </menu>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
export default {
  components: {
    CommentBody
  },
  computed: {
    scoreDetailed () {
      let comment = this.comment
      let percentage =
        Math.round(100 * (comment.upvotes / (comment.upvotes + comment.downvotes)))
      return `${comment.upvotes} up / ${comment.downvotes} down (${percentage}% like it)`
    },
    score () {
      return this.comment.upvotes - this.comment.downvotes
    }
  },
  methods: {
    upvote () {
      this.$store.commit('upvoteComment', this.comment.id)
    },
    downvote () {
      this.$store.commit('downvoteComment', this.comment.id)
    },
    goComment () {
      this.$store.commit('setNewCommentPostId', this.$route.params.entry)
      this.$store.commit('setNewCommentParent', this.comment)
      this.$router.push('/blog/comment')
    }
  },
  props: ['comment']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comment-container
  max-width 40rem

  menu
    display flex
    flex-flow row nowrap
    justify-content flex-end

    font-size 0.75rem
    color light

    .divider
      border-right 1px solid lighten(bc,50%)
    a
      padding 0 0.75rem
      color light
      cursor pointer
      &:hover
        color link
    .score
      display flex
      a.down
        padding-right 0.5rem
      a.up
        padding-left 0.5rem
      .value
        flex 1
        text-align center
        font-weight 500
        min-width 1.75rem
</style>

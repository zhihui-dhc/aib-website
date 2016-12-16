<template>
  <div class="pz-comment-form-wrapper">
  <form class="pz-comment-form" v-on:submit.prevent.default="submitComment">
    <header>
      <menu class="left">
        <button class="btn-link btn-go-back" type="button" @click="goBack()">
          <i class="fa fa-close"></i>
        </button>
      </menu>
      <div class="title">Add Comment</div>
      <menu class="right">
        <button class="btn-link" type="submit">Send</button>
      </menu>
    </header>
    <comment-body
      v-if="newComment.parentComment.author"
      :comment="newComment.parentComment">
    </comment-body>
    <div class="pz-comment-form-body">
      <textarea
        v-model="newComment.comment.body"
        placeholder="Your comment"
        id="pz-comment-textarea"
        required>
      </textarea>
    </div>
  </form>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
import shortid from 'shortid'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommentBody
  },
  computed: {
    ...mapGetters([
      'newComment',
      'sessionUser'
    ])
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    viewComment (commentId) {
      let postId = this.newComment.comment.postId
      let url = `/blog/${postId}/${commentId}`
      // console.log('browsing to', url)
      this.$router.push(url)
    },
    submitComment () {
      let comment = this.newComment.comment

      if (comment.body === '') {
        console.log('body is empty')
        return
      }
      if (comment.body.length < 3) {
        console.log('body is too short')
        return
      }

      this.submitNewComment()
      this.viewComment(comment.id)
      this.$store.commit('resetNewComment')
    },
    submitNewComment () {
      let user = this.sessionUser
      let comment = this.newComment.comment

      comment.userId = user.email
      comment.id = shortid.generate()
      comment.dateCreated = +new Date()
      this.$store.commit('addComment', comment)
    }
  },
  mounted () {
    if (!this.sessionUser.email) { this.$router.push('/signin') }
    if (this.newComment.comment.postId === '') { this.$router.push('/blog') }
    document.querySelector('#pz-comment-textarea').focus()
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
.pz-comment-form-wrapper
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  z-index 1000
  background #fff

.pz-comment-form
  max-width 40rem
  margin 0 auto
  display block

  border-left 1px solid bc
  border-right 1px solid bc
  min-height 100vh

  display flex
  flex-flow column

  header
    flex 0 0 3rem
    border-bottom 1px solid bc
    padding 0 0.5rem
    display flex
    align-items center
    menu
      flex 1
      &.right
        display flex
        justify-content flex-end

      .btn-go-back
        color light
    .title
      flex 4
      font-weight 500
      font-size 1.125em
      text-align center

  .pz-comment-body
    padding 0.5rem 0.5rem 0
    border-bottom 1px solid bc

  .pz-comment-form-body
    position relative
    flex 1
    display flex
    align-items stretch
    align-content stretch

    textarea
      border none
      flex 1
      height auto
      resize none
      position relative
      padding 0.5rem

      outline none
      box-shadow none

      font-size 0.875rem
</style>

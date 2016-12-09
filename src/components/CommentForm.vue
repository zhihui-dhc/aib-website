<template>
  <form class="pz-comment-form" v-on:submit.prevent.default="submitComment" v-show="commentFormVisible">
    <header>
      <div class="close" @click="setCommentFormVisible(false)">X</div>
      <div class="title">Add Comment</div>
      <input class="btn btn-default" type="Submit" value="Submit">
    </header>
    <div class="body">
      <textarea v-model="comment.body" placeholder="Leave a comment" required></textarea>
    </div>
  </form>
</template>

<script>
import shortid from 'shortid'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'commentFormVisible'
    ])
  },
  data () {
    return {
      comment: {
        id: shortid.generate(),
        author: 'CosmosUser',
        dateCreated: +new Date(),
        body: '',
        postId: 'purpose-of-cosmos',
        score: 0,
        parentId: ''
      }
    }
  },
  methods: {
    setCommentFormVisible (value) {
      this.$store.commit('setCommentFormVisible', value)
    },
    submitComment () {
      if (this.comment.body === '') {
        console.log('body is empty')
        return
      }
      if (this.comment.body.length < 3) {
        console.log('body is too short')
        return
      }
      this.comment.dateCreated = +new Date()
      this.$store.commit('addComment', this.comment)
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comment-form
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  background #fff
  padding 0.5rem
  display block
  z-index 1000
  textarea
    display block
    width 100%
    color light
    border 1px solid bc
    color txt
    height 2rem
    padding 0 0.5rem
    padding 0.25*x - 1px 0.375rem
  &:hover
    textarea
      border-color link
</style>

<template>
  <a class="pz-comment-form-btn" @click="goComment">
    <span class="form-input">Add a comment</span>
  </a>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['sessionUser'])
  },
  methods: {
    goComment () {
      if (!this.sessionUser.email) {
        this.$router.push('/signin')
      } else {
        this.$store.commit('setNewCommentPostId', this.$route.params.entry)
        this.$router.push('/comment/new')
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
.pz-comment-form-btn
  background #fff
  padding 0.5rem
  display block
  cursor pointer
  span.form-input
    display block
    width 100%
    color light
    border 1px solid bc
    color txt
    height 2rem
    padding 0.25*x - 1px 0.375rem
    color light
  &:hover
    span.form-input
      border-color link
</style>

<template>
  <a class="pz-comment-form-btn" @click="setCommentFormVisible(true)">
    <span class="form-input">Add a comment</span>
  </a>
</template>

<script>
export default {
  methods: {
    setCommentFormVisible (value) {
      this.$store.commit('setCommentFormVisible', value)
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

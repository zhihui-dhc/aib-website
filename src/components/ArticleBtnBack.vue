<template>
  <router-link class="article-btn-back" to="/blog">
    <i class="fa fa-angle-left"></i>
  </router-link>
</template>


<style lang="stylus">
@import '../styles/variables.styl'

.article-btn-back
  width 3rem
  height 3rem
  border-radius 1.5rem

  position fixed
  bottom 0.5rem
  right 0.5rem
  z-index 100

  display flex
  align-items center
  justify-content center
  
  background alpha(c-app-bg,85%)
  border 1px solid bc

  i.material-icons
    font-size 1.5rem
    color txt

  &:hover
    text-decoration none
    i.material-icons
      color link
</style>

<template>
  <a id="article-back-btn" v-link="{ path: '/blog' }">
    <i class="material-icons">chevron_left</i>
  </a>
</template>


<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#article-back-btn
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
  
  background alpha(mbg,85%)
  border 1px solid bc

  i.material-icons
    font-size 1.5rem
    color txt

  &:hover
    text-decoration none
    i.material-icons
      color link
</style>

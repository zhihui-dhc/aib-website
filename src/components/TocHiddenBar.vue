<template>
  <div class="toc-hidden-bar">
    <i :class="'fa fa-' + icon"></i>
  </div>
</template>

<script>
export default {
  name: 'toc-hidden-bar',
  props: ['icon']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.toc-hidden-bar
  z-index 101
  position fixed
  top 3*x + 0.5*x
  right 0.5*x
  bottom 0.5*x
  width 2*x
  max-height 100vh

  background c-app-bg

  text-align center
  cursor pointer

  i.fa
    font-size 0.75rem
    line-height 2rem

  &:hover
    i.fa
      color link

@media screen and (max-width: 1023px)
  .toc-hidden-bar
    width 3rem
    height 3rem
    border-radius 1.5*x

    top auto
    left auto
    bottom 0.5*x
    right 0.5*x

    display flex
    align-items center
    justify-content center
    
    background c-app-fg
    shadow()

    i.fa
      font-size 1rem
</style>

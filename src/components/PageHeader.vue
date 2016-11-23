<template>
  <header class="page-header">
    <h1>{{ title }}</h1>
    <p v-html="subtitle"></p>
  </header>
</template>

<script>
export default {
  name: 'page-header',
  props: ['title', 'subtitle']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.page-header
  position relative
  margin-top 2.4*x
  padding 3*x 2*x

  display flex
  align-items center
  flex-flow column nowrap

  background bc
  margin-bottom 4px

  h1, p
    text-align center

  h1
    font-size 2*x
    line-height 1
    margin-bottom 0.75*x
    letter-spacing -0.025em
    font-weight 400
    max-width 40*x
    font-weight 600
    color txt

  p
    color dim
    line-height 1.25*x
    max-width 22*x

    strong
      font-weight 500
      color lighten(mcolor,65%)

    a
      color link
      background hsla(0,0,0,0.2)
      padding 0 0.25*x

@media screen and (min-height: 400px)
  .page-header
    margin-top 3*x

@media screen and (min-width: 960px)
  .page-header
    align-items flex-start
    padding 3*x
    h1, p
      text-align left

    &.page-header-wide
      padding 3*x 0
      max-width 48em
      margin-left auto
      margin-right auto
      h1
        max-width 30*x
        font-weight 600
</style>

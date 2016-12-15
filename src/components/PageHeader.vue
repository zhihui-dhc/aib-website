<template>
  <header :class="headerClass">
    <h1>{{ title }}</h1>
    <p v-if="subtitle" v-html="subtitle"></p>
  </header>
</template>

<script>
export default {
  name: 'page-header',
  computed: {
    headerClass () {
      let value = 'page-header'
      if (this.type === 'center') {
        value += ' page-header-center'
      } else if (this.type === 'wide') {
        value += ' page-header-wide'
      } else {
        value += ' page-header-default '
      }
      return value
    }
  },
  props: ['title', 'subtitle', 'type']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.page-header + .section-default
  .section-container
    padding-top 0

.page-header
  position relative
  padding 2rem
  letter-spacing -0.025em

  display flex
  flex-flow column nowrap

  h1, p
    text-align center

  h1
    font-size 1.5*x
    line-height 1
    font-weight 400
    max-width 40*x
    font-weight 600
    color txt

  p
    color dim
    line-height 1.25*x
    max-width 22*x
    margin-top 0.75rem

    strong
      font-weight 500
      color lighten(mcolor,65%)

    a
      color link

  &.page-header-default
    align-items center
  &.page-header-center
    align-items center
    justify-content center
    align-content center

@media screen and (min-width: 960px)
  .page-header
    padding 3*x
    h1, p
      text-align left

    &.page-header-default
      align-items flex-start

    &.page-header-wide
      padding 3*x 0
      max-width 40em
      margin-left auto
      margin-right auto
      h1
        font-weight 600
</style>

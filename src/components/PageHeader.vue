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

.page-header
  position relative
  padding 2rem 1rem
  border-bottom 0.25rem solid c-app-fg

  display flex
  flex-flow column nowrap

  h1, p
    text-align center

  h1
    font-size 1.75*x
    line-height 1.25
    color txt
    font-weight 500

    max-width 40*x
    margin 0 auto

  p
    color dim
    line-height 1.25*x

    max-width 22*x
    margin 0.5rem auto 0

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

@media screen and (min-width: 720px)
  .page-header
    h1
      font-size 2rem
      font-weight 600

@media screen and (min-width: 960px)
  .page-header
    padding 3rem

    &.page-header-wide
      padding 3rem
      max-width 40em
      margin-left auto
      margin-right auto

      h1, p
        text-align left
</style>

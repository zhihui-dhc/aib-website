<template>
  <header :class="headerClass">
    <div class="text">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle" v-if="subtitle" v-html="subtitle"></p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'page-header',
  computed: {
    headerClass () {
      let value = 'page-header'
      if (this.type === 'left') {
        value += ' page-header-left'
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
  border-bottom 1px dotted bc

  .text
    margin 0 auto
    padding 1.5rem 1rem

    display flex
    flex-flow column nowrap
    align-items left

  .title
    font-size 2rem
    line-height 1.25
    color txt
    font-weight 500

  .subtitle
    color light
    margin-top 0.5rem
    font-size 0.875*x

    strong
      font-weight 500
      color lighten(mcolor,65%)

    a
      color link

@media screen and (min-width: 360px)
  .page-header
    .subtitle
      font-size 1rem

@media screen and (min-width: 720px)
  .page-header
    .text
      padding-left 1.5rem
      padding-right 1.5rem
    .title
      font-weight 600

    &.page-header-default .text
      align-items center
      justify-content center
      align-content center

@media screen and (min-width: 960px)
  .page-header
    .text
      padding-top 3rem
      padding-bottom 3rem
</style>

<template>
  <menu class="locale-menu">
    <router-link v-if="langs.includes('en-US')" :to="dir" exact>
      English
    </router-link>
    <router-link v-if="langs.includes('ja')" :to="dir + 'ja'">日本語</router-link>
    <router-link v-if="langs.includes('ko')" :to="dir + 'ko'">한국어</router-link>
    <router-link v-if="langs.includes('zh-CN')" :to="dir + 'zh-CN'">简体中文</router-link>
  </menu>
</template>

<script>
export default {
  name: 'locale-menu',
  computed: {
    dir () {
      return '/' + this.path + '/'
    }
  },
  props: ['path', 'langs']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.locale-menu
  position absolute
  top 3rem
  left 0
  z-index 10

  width 100vw

  display flex
  align-items center
  padding 0 0.25rem
  justify-content center

  height 1.5rem
  border-bottom 1px dotted bc
  a
    font-size 0.75rem
    padding 0 0.75rem
    display block
    cursor pointer
    color txt
    &:hover
      color link
    &.router-link-active
      color light
</style>

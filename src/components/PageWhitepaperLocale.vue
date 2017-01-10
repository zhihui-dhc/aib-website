<template>
  <menu class="page-whitepaper-locale">
    <router-link to="/whitepaper/en-US">English</router-link>
    <router-link to="/whitepaper/zh-CN">中文</router-link>
    <!--
    <router-link to="/whitepaper/ja">日本語</router-link>
    <router-link to="/whitepaper/ko">한국어</router-link>
    -->
  </menu>
</template>

<script>
export default {
  name: 'page-whitepaper-locale'
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.page-whitepaper-locale
  display flex
  align-items center
  padding 0 0.25rem
  justify-content center

  height 2rem
  border-bottom 1px dotted bc
  a
    font-size 0.875rem
    padding 0 0.75rem
    display block
    cursor pointer
    color txt
    &.router-link-active
      color light
</style>

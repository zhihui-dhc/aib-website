<template>
  <menu class="page-whitepaper-locale">
    <router-link to="/whitepaper/en-US">English</router-link>
    <router-link to="/whitepaper/zh-CN">中文</router-link>
    <router-link to="/whitepaper/ja">日本語</router-link>
    <router-link to="/whitepaper/ko">한국어</router-link>
  </menu>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'page-whitepaper-locale',
  computed: {
    lang () {
      return Vue.config.lang
    }
  },
  methods: {
    setLang (lang) {
      Vue.config.lang = lang
      window.localStorage.setItem('language', lang)
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.page-whitepaper-locale
  display flex
  align-items center
  padding 0 0.25*x
  justify-content center
  height 3rem
  border-bottom 1px solid bc
  a
    padding 0 0.75*x
    display block
    cursor pointer
    &.router-link-active
      color txt
</style>

<template>
  <menu class="locale-menu">
    <template v-for="lang in languages">
      <router-link :to="dir" v-if="lang.code === 'enUS'">{{ lang.name }}</router-link>
      <router-link :to="dir + lang.code" v-else>{{ lang.name }}</router-link>
    </template>
  </menu>
</template>

<script>
export default {
  name: 'locale-menu',
  computed: {
    dir () {
      return '/' + this.path + '/'
    },
    languages () {
      let enabledCodes = this.langs
      return this.allLanguages.filter(l => enabledCodes.includes(l.code))
    }
  },
  data () {
    return {
      allLanguages: [
        { name: 'English', code: 'en-US' },
        { name: 'Português', code: 'pt' },
        { name: '日本語', code: 'ja' },
        { name: '한국어', code: 'ko' },
        { name: '简体中文', code: 'zh-CN' }
      ]
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
  padding 0 0.5rem
  justify-content center

  height 1.5rem
  border-bottom 1px dotted bc
  a
    font-size 0.75rem
    padding 0 0.5rem
    display block
    cursor pointer
    color txt
    &:hover
      color link
    &.router-link-active
      color light
</style>

<template>
  <div class="locale-menu-container">
    <div class="locale-menu-btn" @click="toggle(true)">
      <i class="fa fa-times" v-if="maximized"></i>
      <i class="fa fa-globe" v-else></i>
    </div>
    <menu class="locale-menu" v-show="maximized">
      <template v-for="lang in languages">
        <router-link
          :to="dir"
          v-if="lang.code === 'en-US'"
          @click.native="set(false)"
          exact>
          {{ lang.name }}
        </router-link>
        <router-link
          :to="dir + lang.code"
          @click.native="set(false)"
          v-else>
          {{ lang.name }}
        </router-link>
      </template>
    </menu>
  </div>
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
      maximized: false,
      allLanguages: [
        { name: 'English', code: 'en-US' },
        { name: 'Português', code: 'pt' },
        { name: '日本語', code: 'ja' },
        { name: '한국어', code: 'ko' },
        { name: '简体中文', code: 'zh-CN' }
      ]
    }
  },
  methods: {
    toggle (value) {
      this.maximized = !this.maximized
    },
    set (value) {
      this.maximized = value
    }
  },
  props: ['path', 'langs']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.locale-menu-container
  position fixed
  bottom 4rem
  right 0
  z-index 99

.locale-menu-btn, .locale-menu
  background alpha(#fff, 95%)
  backdrop-filter blur(0.125rem)
  shadow()

.locale-menu-btn
  position absolute
  bottom 0
  right 0.5rem

  width 3rem
  height 3rem
  border-radius 1.5rem
  display flex
  align-items center
  justify-content center

.locale-menu
  position absolute
  bottom 3.5rem
  right 0
  width 100vw
  max-width 20rem
  z-index 100

  a
    display block
    line-height 3em
    border-bottom 1px solid bc
    padding 0 1.25rem
    cursor pointer
    color txt

    &:hover
      color link
    &.router-link-active
      color light
    &:last-of-type
      border-bottom none
@media screen and (min-width:1024px)
  .locale-menu-container
    bottom 0.5rem
</style>

<template>
  <header class="app-header">
    <router-link to="/" class="nav-home" exact>
      <img src="../assets/images/cosmos_logo_m.png" alt="Cosmos Logo">
    </router-link>
    <nav>
      <router-link to="/blog" exact>{{ $t('siteHeader.blog') }}</router-link>
      <router-link to="/plan">{{ $t('siteHeader.plan') }}</router-link>
      <router-link to="/faq">{{ $t('siteHeader.faq') }}</router-link>
      <router-link to="/whitepaper">
        <span class="short">{{ $t('siteHeader.wp') }}</span>
        <span class="long">{{ $t('siteHeader.whitepaper') }}</span>
      </router-link>
      <a class="nav-github" href="https://github.com/cosmos/cosmos">
        <i class="fa fa-github"></i>
        <span class="label">GitHub</span>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

default-border-top()
  border-top 4px solid bc

highlighted-border-top-color()
  border-top-color light !important

.app-header
  position fixed
  top 0
  left 0
  z-index 100
  width 100vw
  display flex

  background c-app-bg
  background hsla(0,0,100%,95%)
  box-shadow hsla(0,0,0,0.04) 0 0.2rem 0.3rem

  a.nav-home
    height 3*x
    padding 0 x

    default-border-top()

    display flex
    align-items center

    img
      display block
      height x*1.125
      width auto

  nav
    flex 1
    display flex
    justify-content flex-end
    default-border-top()
    padding-right 0.5*x
    a
      display block
      padding 0 0.5*x
      color txt
      default-border-top()

      margin-top -4px
      line-height 3*x - 4px

      .short
        display inline
      .long
        display none

      &.nav-github
        display none

      &:hover
        text-decoration none
        highlighted-border-top-color()

      &.router-link-active
        highlighted-border-top-color()

@media screen and (min-width: 360px)
  .app-header
    nav
      a
        font-size x
        .short
          display none
        .long
          display inline

@media screen and (min-width: 400px)
  .app-header
    nav
      padding-left 0.75*x
      a
        padding 0 0.75*x

@media screen and (min-width: 480px)
  .app-header
    nav
      a
        &.nav-github
          display block

@media screen and (min-width: 640px)
  .app-header
    nav
      a
        padding 0 1.5*x

@media screen and (min-width: 720px)
  .app-header
    nav
      a
        i.fa
          margin-right 0.25*x
        .label
          display inline
</style>

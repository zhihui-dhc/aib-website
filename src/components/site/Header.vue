<template>
  <header id="site-header">
    <div id="site-logo">
      <a v-link="{ path: '/' }">
        <img src="../../assets/images/cosmos_logo_m.png" alt="Cosmos">
      </a> 
    </div>
    <nav id="site-nav">
      <a class="nav-link" v-link="{ path: '/blog', exact: true }">Blog</a>
      <a v-link="{ path: '/plan' }">Plan</a>
      <a v-link="{ path: '/faq' }">FAQ</a>
      <a v-link="{ path: '/whitepaper' }">Whitepaper</a>
    </nav>
  </header>
</template>

<script>
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#site-header
  width 100vw
  height 3*x
  line-height 3*x

  position fixed
  top 0
  left 0
  z-index 1000

  display flex
  flex-flow row

  background #fff
  background hsla(0,0,100%,95%)

  backdrop-filter blur(0.25rem)

  box-shadow hsla(0,0,0,0.04) 0 0.2rem 0.3rem

#site-logo
  a
    height 3*x
    padding 0 0.5*x

    display flex
    align-items center

    img
      display block
      height x
      width auto

#site-nav 
  flex 1
  display flex
  flex-flow row
  justify-content flex-end

  padding-right 0.35*x
  a
    display block
    text-decoration none
    padding 0 0.5rem

    color txt
    font-size 0.75rem

    &:hover 
      color link

    &.v-link-active
      position relative
      background mbg
      color light

      &:after
        display none
        content ''
        position absolute
        top 0
        left 0
        height 2px
        width 100%
        background txt

@media screen and (max-height: 480px)
  #site-header
    position absolute

@media screen and (min-width: 360px)
  #site-logo
    a
      padding 0 x
  #site-nav
    padding-right 0.6*x
    a
      font-size 0.875*x

@media screen and (min-width: 414px)
  #site-logo
    a
      padding 0 x
  #site-nav
    a
      font-size x

@media screen and (min-width: 568px)
  #site-logo
    flex 1
  #site-nav
    flex 3
    a
      flex 1
      border-left 1px solid mbg
      padding 0 1rem

@media screen and (min-width: 768px)
  #site-logo
    flex 1
    a
      img
        height 1.125rem
  #site-nav
    flex 2
</style>

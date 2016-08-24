<template>
  <header id="site-header">
    <a v-link="{ path: '/' }" id="nav-home">
      <img src="../../assets/logo.png" alt="Cosmos">
    </a>
    <nav id="nav-site">
      <a v-link="{ path: '/blog' }">Blog</a>
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

  padding 0 0.333*x

  background #fff
  background hsla(0,0,100%,85%)

  a
    display block
    text-decoration none
    padding 0 0.333*x

    color txt
    font-size 0.75*x

    &:hover 
      color link

    &#nav-home
      display flex
      align-items center
      img
        display block
        height x
        width auto

    &.v-link-active
      color link

  #nav-site
    flex 1

    display flex
    flex-flow row
    justify-content flex-end

@media screen and (min-width: 375px)
  #site-header a
    font-size 0.85*x
    &#nav-home img
      height 1.1333*x

@media screen and (min-width: 414px)
  #site-header a
    font-size x
    &#nav-home img
      height 1.25*x
@media screen and (min-width: 768px)
  #site-header
    padding 0 0.5*x
    a
      padding 0 0.5*x

@media screen and (min-width: 960px)
  #site-header
    padding 0 0.5*x
    a
      padding 0 0.75*x
</style>

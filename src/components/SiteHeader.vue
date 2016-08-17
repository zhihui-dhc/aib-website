<template>
  <header id="site-header">
    <a v-link="{ path: '/' }" id="nav-home">Cosmos</a>
    <nav id="nav-site">
      <a v-link="{ path: '/whitepaper' }">Whitepaper</a>
      <a v-link="{ path: '/plan' }">Plan</a>
      <a v-link="{ path: '/faq' }">FAQ</a>
    </nav>
  </header>
</template>

<script>
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

#site-header
  width 100vw
  height 3*x
  line-height 3*x

  background hsla(0,0,100%,75%)

  display flex
  flex-flow row

  border-bottom 1px solid bc

  a
    display block
    text-decoration none
    padding 0 x

    color txt
    &:hover 
      color link

  #nav-site
    flex 1

    display flex
    flex-flow row
    justify-content flex-end
</style>

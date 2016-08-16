<template>
  <footer id="site-footer">
    <a href="#" id="nav-item-home">&copy; 2016 Cosmos Foundation</a>

    <nav id="nav-site">
      <a href="#" id="nav-item-whitepaper">Whitepaper</a>
      <a href="#" id="nav-item-plan">Plan</a>
      <a href="#" id="nav-item-faq">FAQ</a>
    </nav>
  </footer>
</template>

<script>
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

#site-footer
  width 100vw
  height 3*x
  line-height 3*x

  background hsla(0,0,100%,75%)

  display flex
  flex-flow row

  border-top 1px solid bc

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

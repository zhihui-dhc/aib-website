<template>
<header id="header-site">
  <a href="#" id="nav-item-home">Cosmos</a>
  <nav id="nav-site">
    <a href="#" id="nav-item-whitepaper">Whitepaper</a>
    <a href="#" id="nav-item-plan">Plan</a>
    <a href="#" id="nav-item-faq">FAQ</a>
  </nav>
</header>

<section class="section-cover">
  <h1>Cosmos</h1>
  <h2>a network of distributed ledgers</h2>
  <p id="countdown">58 days til October 8th</p>
</section>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

#header-site
  position fixed
  width 100vw
  height 3*x
  line-height 3*x

  background hsla(0,0,100%,75%)

  display flex
  flex-flow row

  z-index 101

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

.section-cover
  background bc
  width 100vw
  height 56.25vw

  display flex
  flex-flow column
  justify-content center
  align-items center

h1
  text-transform uppercase
  font-size 3*x
  font-weight bold
  letter-spacing x

h2
  font-size 1.5*x
  margin 0 0 x

#countdown
  font-weight bold
</style>

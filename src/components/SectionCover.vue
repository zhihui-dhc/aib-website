<template>
<section class="section-cover">
  <h1>Cosmos</h1>
  <h2>a network of distributed ledgers</h2>
</section>
</template>

<script>
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.section-cover
  width 100vw
  height 56.25vw
  //height 100vh
  //max-height 16/9 * 100vw
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
  color dim
  margin 0 0 3*x

#countdown
  font-weight bold
</style>

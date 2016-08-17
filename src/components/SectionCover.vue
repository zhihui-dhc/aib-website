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
  height 80vh
  max-height 133.33vw
  display flex
  flex-flow column
  justify-content center
  align-items center

h1
  text-transform uppercase
  font-size 3*x
  font-weight bold
  letter-spacing 0.3em

h2
  font-size 1.25*x
  color dim

#countdown
  font-weight bold
</style>

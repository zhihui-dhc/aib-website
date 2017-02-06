<template>
  <div class="toc-padding">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'toc-padding'
}
</script>

<style lang="stylus">
@media screen and (min-width: 960px)
  .toc-padding.toc-visible
    margin-left 33.333vw
@media screen and (min-width: 1200px)
  .toc-padding.toc-visible
    margin-left 25vw
</style>
